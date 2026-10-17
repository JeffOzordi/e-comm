import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import categories from '../data/categories';

export interface Category {
  slug: string;
  name: string;
  url: string;
}

const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      apiClient.get<Category[]>('/products/categories').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: categories
  });

export default useCategories;
