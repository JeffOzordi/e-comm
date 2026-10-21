import { Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useProductQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useProductQueryStore((s) => s.setSearchText);
  const navigate = useNavigate()
  
  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          navigate('/')
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<BsSearch size={18} color="gray" />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search products..."
          variant={'outline'}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
