import { useQuery } from '@tanstack/react-query';
import { ProductQuery } from '../App';
import apiClient from '../services/api-client';

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

const useProducts = (productQuery: ProductQuery) => useQuery({
  queryKey: ['products', productQuery],
 
    queryFn: () => {
      const { category, sortOrder, sortType, searchText } = productQuery;

      const endpoint = searchText
        ? '/products/search'
        : category
          ? `/products/category/${category.slug}`
          : '/products';

      return apiClient
        .get<FetchProductsResponse>(endpoint, {
          params: {
            ...(searchText ? { q: searchText } : {}),
            ...(sortOrder ? { sortBy: sortOrder } : {}),
            ...(sortType ? { order: sortType } : {}),
          },
        })
        .then((res) => res.data.products);
    },

})

export default useProducts;
