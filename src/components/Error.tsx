import { Box, Text } from '@chakra-ui/react';

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return (
    <Box className='bg-red-300 dark:bg-transparent' justifyItems={'center'} marginX={3} border={'.5px solid red'} borderRadius={5} padding={1}>
      <Text className='text-red-500'>{message}</Text>
    </Box>
  );
};

export default Error;
