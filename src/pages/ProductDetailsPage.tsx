import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import useProduct from '../hooks/useProduct';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(parseInt(id!));

  const [activeImage, setActiveImage] = useState(0);

  const images = product?.images?.length
    ? product.images
    : product?.thumbnail
      ? [product.thumbnail]
      : [];

  // Reset the carousel when navigating to another product.
  useEffect(() => {
    setActiveImage(0);
  }, [id]);

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  if (isLoading) {
    return (
      <Box className="flex min-h-[60vh] items-center justify-center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Box padding={8} textAlign="center">
        <Heading size="lg">Product not found</Heading>
        <Text mt={2}>We couldn't load this product. Please try again.</Text>
      </Box>
    );
  }

  return (
    <Box className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Box className="mx-auto grid max-w-375 grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-2 lg:gap-8 lg:p-8">
        {/* LEFT: Product image carousel */}
        <Box className="min-w-0">
          <Box className="group relative flex aspect-4/5 max-h-200 items-center justify-items-center overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 sm:rounded-3xl">
            {images.length > 0 ? (
              <Image
                key={images[activeImage]}
                src={images[activeImage]}
                alt={product.title}
                width="100%"
                height="100%"
                objectFit="contain"
                padding={4}
              />
            ) : (
              <Text>No product image available</Text>
            )}

            {images.length > 1 && (
              <>
                <Button
                  aria-label="Previous product image"
                  position="absolute"
                  left={3}
                  top="50%"
                  transform="translateY(-50%)"
                  rounded="full"
                  size="sm"
                  onClick={showPreviousImage}
                  bg="white"
                  color="black"
                  _hover={{ bg: 'gray.200' }}
                >
                  &#8592;
                </Button>

                <Button
                  aria-label="Next product image"
                  position="absolute"
                  right={3}
                  top="50%"
                  transform="translateY(-50%)"
                  rounded="full"
                  size="sm"
                  onClick={showNextImage}
                  bg="white"
                  color="black"
                  _hover={{ bg: 'gray.200' }}
                >
                  &#8594;
                </Button>

                <Text
                  position="absolute"
                  bottom={4}
                  right={4}
                  rounded="full"
                  bg="white"
                  color="black"
                  px={3}
                  py={1}
                  fontSize="sm"
                >
                  {activeImage + 1} / {images.length}
                </Text>
              </>
            )}
          </Box>

          {/* Clickable image previews */}
          {images.length > 1 && (
            <HStack
              mt={4}
              gap={3}
              overflowX="auto"
              className="hide-scrollbar"
              align="stretch"
            >
              {images.map((image, index) => (
                <Box
                  key={`${image}-${index}`}
                  flex="0 0 76px"
                  cursor="pointer"
                  overflow="hidden"
                  rounded="xl"
                  borderWidth="2px"
                  borderColor={activeImage === index ? 'black' : 'transparent'}
                  _dark={{
                    borderColor:
                      activeImage === index ? 'white' : 'transparent',
                  }}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    width="76px"
                    height="76px"
                    objectFit="contain"
                    padding={1}
                    bg="gray.100"
                    _dark={{ bg: 'gray.900' }}
                  />
                </Box>
              ))}
            </HStack>
          )}
        </Box>

        {/* RIGHT: Product information */}
        <VStack align="stretch" gap={5} padding={{ base: 1, md: 4, lg: 6 }}>
          <HStack gap={2} flexWrap="wrap">
            <Text className="text-amber-700" fontSize="sm">
              ★★★★★
            </Text>
            <Text fontSize="sm">{product.rating.toFixed(1)} / 5</Text>
            <Text fontSize="sm" color="gray.500">
              Customer rating
            </Text>
          </HStack>

          <Heading size={{ base: 'xl', md: '2xl' }} letterSpacing="-0.04em">
            {product.title}
          </Heading>

          <HStack gap={2} flexWrap="wrap">
            {product.tags.map((tag) => (
              <Box
                rounded="full"
                border="1px solid"
                borderRadius="12px"
                px={3}
                py={1}
                fontSize="sm"
                className="border-amber-700 text-amber-700  "
                key={tag}
              >
                {tag}
              </Box>
            ))}
          </HStack>

          <Text lineHeight="1.8" color="gray.600" _dark={{ color: 'gray.300' }}>
            {product.description}
          </Text>

          <Button
            width="100%"
            height="52px"
            rounded="xl"
            bg="black"
            color="white"
            _hover={{ bg: 'gray.800' }}
            _dark={{ bg: 'white', color: 'black', _hover: { bg: 'gray.200' } }}
            onClick={() => {
              // Connect this to your cart implementation.
            }}
          >
            ADD TO CART — ${product.price}
          </Button>

          {/* Product assurance panel */}
          <Box
            mt={4}
            overflow="hidden"
            rounded="2xl"
            border="1px solid"
            borderColor="gray.200"
            bg="white"
            _dark={{
              bg: 'gray.950',
              borderColor: 'gray.700',
            }}
          >
            {/* Stock status banner */}
            <Box
              px={4}
              py={3}
              borderBottom="1px solid"
              borderColor="gray.200"
              _dark={{ borderColor: 'gray.700' }}
            >
              <HStack justify="space-between" align="center" gap={3}>
                <HStack gap={2}>
                  <Box
                    h="9px"
                    w="9px"
                    rounded="full"
                    bg={
                      product.availabilityStatus === 'Low Stock'
                        ? 'amber.500'
                        : 'green.500'
                    }
                  />

                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    letterSpacing="0.12em"
                    className="text-amber-700"
                  >
                    {product.availabilityStatus.toUpperCase()}
                  </Text>
                </HStack>

                <Text fontSize="sm" fontWeight="medium">
                  {product.stock} units left
                </Text>
              </HStack>

              <Text mt={1} fontSize="sm" color="gray.500">
                {product.stock <= 5
                  ? 'Limited availability — get yours while stocks last.'
                  : 'Available to order while stocks last.'}
              </Text>
            </Box>

            {/* Delivery, returns, warranty and order quantity */}
            <Box className="grid grid-cols-1 sm:grid-cols-2">
              {/* Shipping */}
              <Box
                p={4}
                borderBottom="1px solid"
                borderColor="gray.200"
                className="sm:border-r"
                _dark={{ borderColor: 'gray.700' }}
              >
                <HStack align="start" gap={3}>
                  <Box
                    flexShrink={0}
                    rounded="lg"
                    p={2}
                    className="bg-amber-50 text-amber-700 dark:bg-amber-950"
                  >
                    <Text fontSize="xl">↗</Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      letterSpacing="0.08em"
                      color="gray.500"
                    >
                      SHIPPING
                    </Text>
                    <Text mt={1} fontWeight="semibold">
                      {product.shippingInformation}
                    </Text>
                    <Text mt={1} fontSize="xs" color="gray.500">
                      Delivery information
                    </Text>
                  </Box>
                </HStack>
              </Box>

              {/* Returns */}
              <Box
                p={4}
                borderBottom="1px solid"
                borderColor="gray.200"
                _dark={{ borderColor: 'gray.700' }}
              >
                <HStack align="start" gap={3}>
                  <Box
                    flexShrink={0}
                    rounded="lg"
                    p={2}
                    className="bg-amber-50 text-amber-700 dark:bg-amber-950"
                  >
                    <Text fontSize="xl">↻</Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      letterSpacing="0.08em"
                      color="gray.500"
                    >
                      RETURNS
                    </Text>
                    <Text mt={1} fontWeight="semibold">
                      {product.returnPolicy}
                    </Text>
                    <Text mt={1} fontSize="xs" color="gray.500">
                      Return policy
                    </Text>
                  </Box>
                </HStack>
              </Box>

              {/* Warranty */}
              <Box
                p={4}
                borderBottom="1px solid"
                borderColor="gray.200"
                className="sm:border-b-0 sm:border-r"
                _dark={{ borderColor: 'gray.700' }}
              >
                <HStack align="start" gap={3}>
                  <Box
                    flexShrink={0}
                    rounded="lg"
                    p={2}
                    className="bg-amber-50 text-amber-700 dark:bg-amber-950"
                  >
                    <Text fontSize="xl">✓</Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      letterSpacing="0.08em"
                      color="gray.500"
                    >
                      WARRANTY
                    </Text>
                    <Text mt={1} fontWeight="semibold">
                      {product.warrantyInformation}
                    </Text>
                    <Text mt={1} fontSize="xs" color="gray.500">
                      Product coverage
                    </Text>
                  </Box>
                </HStack>
              </Box>

              {/* Minimum order */}
              <Box p={4}>
                <HStack align="start" gap={3}>
                  <Box
                    flexShrink={0}
                    rounded="lg"
                    p={2}
                    className="bg-amber-50 text-amber-700 dark:bg-amber-950"
                  >
                    <Text fontSize="xl">＋</Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      letterSpacing="0.08em"
                      color="gray.500"
                    >
                      ORDER QUANTITY
                    </Text>
                    <Text mt={1} fontWeight="semibold">
                      Minimum {product.minimumOrderQuantity} units
                    </Text>
                    <Text mt={1} fontSize="xs" color="gray.500">
                      Minimum order per purchase
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
