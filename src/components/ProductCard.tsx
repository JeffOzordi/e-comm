import React from 'react';
import { Product } from '../hooks/useGames';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-90 h-50  overflow-hidden rounded-3xl  shadow-md   dark:text-white">
      <img
        src={product.thumbnail}
        alt="Thumbnail"
        className="h-28 w-full object-cover"
        
      />

      <div className="p-3 dark:bg-gray-900">
        <h4 className="text-xl dark:text-gray-200 font-bold leading-7 text-gray-900">
          {product.title}
        </h4>
      </div>
    </div>
  );
};

export default ProductCard;
