import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const input = useRef<HTMLInputElement>(null);
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

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
        navigate('/');
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
