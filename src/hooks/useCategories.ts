import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Category {
    slug: string
    name: string
    url: string
}
export type FetchCategoryResponse = Category[]


const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchCategoryResponse>('/products/categories', { signal: controller.signal })
      .then((res) => {
        console.log(res.data)
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { categories, error, isLoading };
};

export default useCategories;
