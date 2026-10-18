import React from 'react';
import useProducts, { Product } from './useProducts';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Product>('/products');

const useProduct = (id: number | string) =>
  useQuery({
    queryKey: ['games', id],
    queryFn: () => apiClient.get(id),
  });

export default useProduct;
