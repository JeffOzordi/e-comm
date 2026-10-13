import { Box, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/244396834_683283099297966_5993122135789503446_n.jpg';
import { Product } from '../hooks/useProduct';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Box>
      <Image
        src={product.thumbnail}
        className="min-w-0 w-105 rounded-4xl bg-gray-200 dark:bg-gray-800"
        padding={2}
      />
      <Box paddingX={5} paddingY={2} className="">
        <Box
          paddingX={'4px'}
          paddingY={'2px'}
          border="1px solid"
          borderRadius='4px'
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
