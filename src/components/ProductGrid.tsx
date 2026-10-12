import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

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

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchProductsResponse>('/products')
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && 
        <div className="text-red-400 bg-red-200 rounded border-red-400 px-3 py-2 border-2 flex justify-center w-auto">
          {error}
        </div>
      }
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductGrid;
