import { Box, Heading } from '@chakra-ui/react';
import { ProductQuery } from './../App';
import useCategories from '../hooks/useCategories';
import { Category } from './../hooks/useCategories';

interface Props {
  productQuery: ProductQuery;
}
const ProductHeading = ({ productQuery }: Props) => {
  const {data: categories}= useCategories()
  const category = categories.find(g => g.slug === productQuery.categorySlug)

  const hasCategory = category
    ? `> ${category?.name}`
    : '';
  const heading = `Products ${hasCategory}`;
  return (
    <Box padding={5}>
      <Heading as={'h1'} fontSize={'4xl'} fontFamily={'mono'}>{heading}</Heading>
    </Box>
  );
};

export default ProductHeading;
