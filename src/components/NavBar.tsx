import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import useGameQueryStore from '../store';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  const reset = useGameQueryStore((s) => s.reset);

  return (
    <HStack padding="0.6rem">
      <Image src={logo} boxSize="3.75rem" alt="Logo" onClick={reset} cursor="pointer" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
