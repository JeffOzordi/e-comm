import { Box, SimpleGrid } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductQuery } from '../App';
import useProducts from '../hooks/useProduct';
import Error from './Error';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProducts(productQuery);

  const products = data?.pages.flatMap((page) => page.products) ?? [];
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Error message={error.message} />;

  const fethcProductCount =
    data?.pages.reduce((total, page) => total + page.products.length, 0) || 0;

  return (
    <Box>
      <InfiniteScroll
        dataLength={fethcProductCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <SimpleGrid
            padding={3}
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            gap={1}
            className="justify-items-center"
          >
            {isLoading &&
              Skeletons.map((skeleton) => (
                <ProductCardSkeleton key={skeleton} />
              ))}
          </SimpleGrid>
        }
        scrollableTarget="scrollableDiv"
      >
        <SimpleGrid
          padding={3}
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
      </InfiniteScroll>
    </Box>
  );
};

export default ProductGrid;
