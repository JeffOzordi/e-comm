import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Product } from '../hooks/useProduct';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Box width="100%" maxWidth="300px">
      <Image
        height="300px"
        width="100%"
        objectFit="contain"
        src={product.thumbnail}
        className="min-w-0 rounded-4xl bg-gray-200 dark:bg-gray-800"
        padding={2}
      />
      <Box paddingX={2} paddingY={1}>
        <Box
          paddingX={'4px'}
          paddingY={'2px'}
          border="1px solid"
          borderRadius="4px"
          className="inline-block  border-amber-700 text-amber-700"
        >
          {product.category}
        </Box>
        <Heading>{product.title}</Heading>
        <Text fontWeight={'medium'} className="font-semibold">
          ${product.price}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
