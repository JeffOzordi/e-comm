import React from 'react';
import { Product } from '../hooks/useGames';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-75 h-90 bg-white dark:bg-gray-900 overflow-hidden rounded-2xl  shadow-md   dark:text-white">
      <img
        src={product.thumbnail}
        alt="Thumbnail"
        className="h-48 w-full object-cover"
      />

      <div className="p-3 dark:bg-gray-900 font-semibold">
        <span className="text-gray-400">
          {product.category}
        </span>
        <h4 className="text-xl mb-2 dark:text-gray-200  leading-7 text-gray-900">
          {product.title}
        </h4>
        <div className="flex justify-between">
          <span>${product.price}</span>
          <span>{product.rating}/5</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
