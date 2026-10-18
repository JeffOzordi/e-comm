import { Box, Heading } from '@chakra-ui/react';
import useCategory from '../hooks/useCategory';
import useProductQueryStore from '../store';

const ProductHeading = () => {
  const categorySlug = useProductQueryStore(s => s.productQuery.categorySlug)

  const category = useCategory(categorySlug)

  const hasCategory = category
    ? `> ${category?.name}`
    : '';
  const heading = `Products ${hasCategory}`
  return (
    <Box padding={5}>
      <Heading as={'h1'} fontSize={'4xl'} fontFamily={'mono'}>{heading}</Heading>
    </Box>
  );
};

export default ProductHeading;
