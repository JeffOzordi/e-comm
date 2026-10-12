import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface Product {
  id: number;
  title: string;
}

const useGames = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<FetchProductsResponse>('/products', { signal: controller.signal })
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)});

      return () => controller.abort()
  }, []);

  return { products, error}
};

export default useGames;
