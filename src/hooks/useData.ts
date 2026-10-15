import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { ProductQuery } from '../App';
import apiClient from '../services/api-client';

const useData = <T>(endpoint: string, productQuery?: ProductQuery | null) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const searchParams = productQuery?.searchText
      ? `/products/search?q=${encodeURIComponent(productQuery.searchText)}`
      : '';

    const sortParams = productQuery?.sortOrder
      ? `?sortBy=${productQuery.sortOrder}&order=${productQuery.sortType ?? 'asc'}`
      : '';

    const requestUrl = productQuery?.searchText
      ? searchParams + sortParams
      : productQuery?.category?.url
        ? productQuery.category.url.replace('https://dummyjson.com', '') +
          sortParams
        : `${endpoint}${sortParams}`;

    setLoading(true);

    apiClient
      .get<T>(requestUrl, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(
          err instanceof Error ? err.message : 'An unexpected error occurred'
        );
        setLoading(false);
      });

    return () => controller.abort();
  }, [
    endpoint,
    productQuery?.category?.url,
    productQuery?.sortOrder,
    productQuery?.sortType,
    productQuery?.searchText,
  ]);

  return { data, error, isLoading };
};

export default useData;
