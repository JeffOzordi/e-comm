import { Box, Text } from '@chakra-ui/react';

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return (
    // <div className="text-red-400 bg-red-200 rounded border-red-400 px-3 py-2 border-4 flex justify-center w-auto">
    //   {message}
    // </div>
    <Box className='bg-red-300 dark:bg-transparent' justifyItems={'center'} marginX={3} border={'.5px solid red'} borderRadius={5} padding={1}>
      <Text className='text-red-500'>{message}</Text>
    </Box>
  );
};

export default Error;
