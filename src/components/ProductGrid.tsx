import { Box, SimpleGrid } from '@chakra-ui/react';
import useProducts from '../hooks/useProduct';
import Error from './Error';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const { products, error, isLoading } = useProducts();

  return (
    <>
      {error && <Error message={error} />}
      <SimpleGrid padding={3} columns={{ sm: 1, md: 3, }}  gap={5} className='justify-items-center'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
