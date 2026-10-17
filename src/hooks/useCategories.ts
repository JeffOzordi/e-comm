import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import categories from '../data/categories';

const apiClient = new APIClient<Category[]>('/products/categories')
export interface Category {
  slug: string;
  name: string;
  url: string;
}

const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: categories
  });

export default useCategories;
