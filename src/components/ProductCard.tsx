import React from 'react';
import { Product } from '../hooks/useGames';
import { HStack } from '@chakra-ui/react';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (

    <article className="min-w-0 bg-white dark:bg-black dark:text-white cursor-pointer">
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover"
        />

        {/* Favourite button */}
        <button
          type="button"
          aria-label={`Add ${product.title} to favourites`}
          className="absolute right-4 top-4 text-gray-900 transition hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
            />
          </svg>
        </button>
      </div>

      {/* Product details */}
      <div className="px-3 pt-4 pb-6 text-gray-800 dark:text-gray-100">
        <span className="inline-block rounded-sm border border-amber-600 px-1 py-0.5 text-xs font-medium tracking-wider text-amber-700">
          {product.category}
        </span>

        <h2 className="mt-2 text-sm font-semibold" >
          {product.title}
        </h2>

        <p className="mt-1 text-sm ">
          ${product.price}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
