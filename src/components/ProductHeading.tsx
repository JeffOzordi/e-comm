import { Box, Heading } from '@chakra-ui/react';
import useCategories from '../hooks/useCategories';
import { ProductQuery } from './../App';
import useCategory from '../hooks/useCategory';

interface Props {
  productQuery: ProductQuery;
}
const ProductHeading = ({ productQuery }: Props) => {
  const category = useCategory(productQuery.categorySlug)

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
