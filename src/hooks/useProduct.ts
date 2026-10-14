import { Category } from './useCategories';
import useData from './useData';

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

const useProducts = (selectedCategory?: Category | null) => {
  const { data, error, isLoading} 
  = useData<FetchProductsResponse>('/products', selectedCategory);

  const products = data?.products ?? [];

  return { products, error, isLoading };
};

export default useProducts;
