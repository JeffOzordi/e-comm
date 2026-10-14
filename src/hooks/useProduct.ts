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

const useProducts = () => {
  const { data, error, isLoading} 
  = useData<FetchProductsResponse>('/products');

  const products = data?.products ?? [];

  return { products, error, isLoading };
};

export default useProducts;
