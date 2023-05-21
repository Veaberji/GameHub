import { Menu, MenuButton, Button, MenuList, MenuItem, Text, Icon, HStack } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

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

interface Props {
  selectedSort: Sort;
  onSelectSort: (sort: Sort) => void;
}

interface SortOrder {
  value: SortBy;
  label: string;
}

const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
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

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {sortOrders.find((s) => s.value === selectedSort.sortBy)?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            onClick={() => onSelectSort({ ...selectedSort, sortBy: sortOrder.value })}
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
                  onSelectSort({ sortBy: sortOrder.value, reversed: false });
                }}
              />
              <Icon
                as={TiArrowSortedUp}
                color={sortOrder.value === selectedSort.sortBy && selectedSort.reversed ? 'gray.200' : 'gray.500'}
                onClick={(event) => {
                  event.stopPropagation();
                  onSelectSort({ sortBy: sortOrder.value, reversed: true });
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
