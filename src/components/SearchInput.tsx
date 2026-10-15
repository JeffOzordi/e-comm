import { Input, InputGroup } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch size={18} color="gray" />}>
      <Input
        borderRadius={20}
        placeholder="Search products..."
        variant={'outline'}
      />
    </InputGroup>
  );
};

export default SearchInput;
