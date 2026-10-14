import { useState, useEffect } from 'react';
import { AxiosRequestConfig, CanceledError } from 'axios';
import apiClient from   '../services/api-client';
import { Category } from './useCategories';

const useData = <T>(endpoint: string, selectedCategory?: Category | null) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<T>(selectedCategory ? selectedCategory.url : endpoint, { signal: controller.signal })
      .then((res) => {
        console.log(selectedCategory?.url)
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(
          err instanceof Error
            ? err.message
            : 'An unexpected error occurred'
        );
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint, selectedCategory]);

  return { data, error, isLoading };
};

export default useData;
