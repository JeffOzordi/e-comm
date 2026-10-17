import { SimpleGrid } from '@chakra-ui/react';
import { ProductQuery } from '../App';
import useProducts from '../hooks/useProduct';
import Error from './Error';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data: products, error, isLoading } = useProducts(productQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Error message={error.message} />;

  return (
    <SimpleGrid
      padding={2}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={1}
      className="justify-items-center"
    >
      {isLoading &&
        Skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
