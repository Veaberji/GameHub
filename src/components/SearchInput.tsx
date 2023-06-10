import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
  const input = useRef<HTMLInputElement>(null);
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  useEffect(() => {
    if (!searchText && input.current) {
      input.current.value = '';
    }
  }, [searchText]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (input?.current?.value) setSearchText(input.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={input} borderRadius={20} placeholder="Search games..." variant="filled"></Input>;
      </InputGroup>
    </form>
  );
};

export default SearchInput;
