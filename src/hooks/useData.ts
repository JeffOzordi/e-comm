import { useState, useEffect } from 'react';
import { AxiosRequestConfig, CanceledError } from 'axios';
import apiClient from '../services/api-client';
import { Category } from './useCategories';
import { ProductQuery } from '../App';

const useData = <T>(endpoint: string, productQuery?: ProductQuery | null) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const searchParams = productQuery?.sortOrder
      ? `?sortBy=${productQuery.sortOrder}&order=desc`
      : '';

    const requestUrl = productQuery?.category?.url
      ? productQuery.category.url.replace('https://dummyjson.com', '') +
        searchParams
      : `${endpoint}${searchParams}`;

    setLoading(true);

    apiClient
      .get<T>(requestUrl, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
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
  }, [endpoint, productQuery?.category?.url, productQuery?.sortOrder]);

  return { data, error, isLoading };
};

export default useData;
