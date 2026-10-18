import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import categories from '../data/categories';
import ms from 'ms'

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
    staleTime: ms('24h'),
    initialData: categories
  });

export default useCategories;
