import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
import useProductQueryStore from '../store';

export interface FetchProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  category: string;
  description: string;
  images: string[];
}

const PAGE_SIZE = 12;

const useProducts = () => {
  const productQuery = useProductQueryStore((s) => s.productQuery);
  return useInfiniteQuery({
    queryKey: ['products', productQuery],

    initialPageParam: 0,

    queryFn: ({ pageParam }) => {
      const { categorySlug, sortOrder, sortType, searchText } = productQuery;

      const endpoint = searchText
        ? '/products/search'
        : categorySlug
          ? `/products/category/${categorySlug}`
          : '/products';

      const apiClient = new APIClient<FetchProductsResponse>(endpoint);

      return apiClient.getAll({
        params: {
          limit: PAGE_SIZE,
          skip: pageParam,
          ...(searchText ? { q: searchText } : {}),
          ...(sortOrder ? { sortBy: sortOrder } : {}),
          ...(sortType ? { order: sortType } : {}),
        },
      });
    },

    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;

      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    staleTime: ms('24h'),
  });
};
export default useProducts;
