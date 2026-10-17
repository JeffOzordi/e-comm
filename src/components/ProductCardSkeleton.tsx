import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

const ProductCardSkeleton = () => {
  return (
    <Box width="100%" maxWidth="300px">
      {/* Product image placeholder */}
      <Skeleton
        height="300px"
        width="100%"
        borderRadius="30px"
        className="bg-gray-200 dark:bg-gray-200"
      />

      {/* Product information placeholders */}
      <Box paddingX={2} paddingY={1}>
        {/* Category */}
        <Skeleton
          height="20px"
          width="65px"
          borderRadius="4px"
          marginBottom={2}
        />

        {/* Product title */}
        <SkeletonText
          noOfLines={1}
          gap={2}
          marginBottom={2}
        />

        {/* Price */}
        <Skeleton height="18px" width="55px" />
      </Box>
    </Box>
  );
};

export default ProductCardSkeleton;