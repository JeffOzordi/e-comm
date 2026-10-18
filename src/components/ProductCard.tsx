
import { useState } from 'react';
import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Product } from '../hooks/useProducts';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link to={'/products/' + product.id}>
      <Box width="100%" maxWidth="300px" _hover={{
        transform: 'scale(1.02)',
        transition: 'all 0.2s ease-in-out'
      }}>
        <Image
          height="300px"
          width="100%"
          objectFit="contain"
          src={product.thumbnail}
          className="min-w-0 rounded-4xl bg-gray-200 dark:bg-gray-800"
          padding={2}
        />

        <Box paddingX={3} paddingY={1}>
          <HStack justifyContent="space-between">
            <Box
              paddingX="4px"
              paddingY="2px"
              border="1px solid"
              borderRadius="4px"
              className="inline-block border-amber-700 text-amber-700"
            >
              {product.category}
            </Box>

            <Box
              paddingX="4.5px"
              paddingY="2.5px"
              borderRadius="4px"
              fontWeight="semibold"
              className="inline-block bg-amber-700 text-black"
            >
              {product.rating}
            </Box>
          </HStack>

          <Heading fontSize="large">{product.title}</Heading>

          <Text fontWeight="medium" className="font-semibold">
            ${product.price}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
