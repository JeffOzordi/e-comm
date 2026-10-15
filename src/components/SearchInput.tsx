import { Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
    onSearch : (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <form className='w-full' onSubmit={(event) => {
        event.preventDefault()

        if(ref.current) onSearch(ref.current.value)
    }}>
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
