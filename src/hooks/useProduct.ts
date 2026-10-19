import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Product } from '../entities/Product';

const apiClient = new APIClient<Product>('/products');

const useProduct = (id: number | string) =>
  useQuery({
    queryKey: ['games', id],
    queryFn: () => apiClient.get(id),
  });

export default useProduct;
