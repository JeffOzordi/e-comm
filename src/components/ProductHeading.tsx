import { Box, Heading } from '@chakra-ui/react';
import { ProductQuery } from './../App';

interface Props {
  productQuery: ProductQuery;
}
const ProductHeading = ({ productQuery }: Props) => {
  const hasCategory = productQuery.category
    ? `> ${productQuery.category?.name}`
    : '';
  const heading = `Products ${hasCategory}`;
  return (
    <Box padding={5}>
      <Heading as={'h1'} fontSize={'4xl'} fontFamily={'mono'}>{heading}</Heading>
    </Box>
  );
};

export default ProductHeading;
