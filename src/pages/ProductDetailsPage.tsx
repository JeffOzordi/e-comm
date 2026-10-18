import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import { Heading, Image, Spinner, Text } from '@chakra-ui/react';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(id!);

  if (isLoading) return <Spinner />;
  if (error || !product) throw error;

  return (
    <>
      <Heading fontSize={'3xl'}>{product.title}</Heading>
      <Text>{product.description}</Text>
      <ol>
        {product.images.map((imgString) => (
          <Image boxSize={'200px'} key={product.id} src={imgString} />
        ))}
      </ol>
    </>
  );
};

export default ProductDetailsPage;
