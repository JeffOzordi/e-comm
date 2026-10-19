import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import categories from '../data/categories';
import ms from 'ms';
import { Category } from '../entities/Category';

const apiClient = new APIClient<Category[]>('/products/categories');
const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: categories,
  });

export default useCategories;
