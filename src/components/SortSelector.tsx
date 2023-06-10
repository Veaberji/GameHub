import { Button, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import useGameQueryStore from '../store';

export enum SortBy {
  byRelevance = '',
  byName = 'name',
  byRelease = 'released',
  byAddedDate = 'added',
  byCreatedDate = 'created',
  byUpdatedDate = 'updated',
  byRating = 'rating',
  byMetacritic = 'metacritic',
}

export interface Sort {
  reversed: boolean;
  sortBy: SortBy;
}

interface SortOrder {
  value: SortBy;
  label: string;
}

const SortSelector = () => {
  const sortOrders: SortOrder[] = [
    { value: SortBy.byRelevance, label: 'Relevance' },
    { value: SortBy.byName, label: 'Name' },
    { value: SortBy.byRelease, label: 'Release date' },
    { value: SortBy.byAddedDate, label: 'Added date' },
    { value: SortBy.byCreatedDate, label: 'Created date' },
    { value: SortBy.byUpdatedDate, label: 'Updated date' },
    { value: SortBy.byRating, label: 'Rating' },
    { value: SortBy.byMetacritic, label: 'Metacritic' },
  ];

  const selectedSort = useGameQueryStore((s) => s.gameQuery.sort);
  const setSelectedSort = useGameQueryStore((s) => s.setSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {sortOrders.find((s) => s.value === selectedSort.sortBy)?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            onClick={() => setSelectedSort({ reversed: selectedSort.reversed, sortBy: sortOrder.value })}
            justifyContent="space-between"
            fontWeight={sortOrder.value === selectedSort.sortBy ? 'bold' : 'normal'}
          >
            <Text>{sortOrder.label}</Text>
            <HStack>
              <Icon
                as={TiArrowSortedDown}
                color={sortOrder.value === selectedSort.sortBy && !selectedSort.reversed ? 'gray.200' : 'gray.500'}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedSort({ sortBy: sortOrder.value, reversed: false });
                }}
              />
              <Icon
                as={TiArrowSortedUp}
                color={sortOrder.value === selectedSort.sortBy && selectedSort.reversed ? 'gray.200' : 'gray.500'}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedSort({ sortBy: sortOrder.value, reversed: true });
                }}
              />
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
