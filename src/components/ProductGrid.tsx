import { SimpleGrid } from '@chakra-ui/react';
import useProducts from '../hooks/useProduct';
import Error from './Error';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

const ProductGrid = () => {
  const { products, error, isLoading } = useProducts();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Error message={error} />}
      <SimpleGrid
        padding={3}
        columns={{ sm: 1, md: 2, lg: 3, xl:4 }}
        gap={3}
        className="justify-items-center"
      >
        {isLoading &&
          Skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
