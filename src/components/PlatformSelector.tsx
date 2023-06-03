import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/usePlatformsHttp';

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (genre: Platform) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { platforms, error, isLoading } = usePlatforms();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platforms?.results.find((p) => p.id === selectedPlatformId)?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
            fontWeight={platform.id === selectedPlatformId ? 'bold' : 'normal'}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
