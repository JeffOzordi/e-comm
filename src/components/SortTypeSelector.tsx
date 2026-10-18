import { Box, Button, Menu, MenuItem } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';
import useProductQueryStore from '../store';

const SortTypeSelector = () => {
  const sortTypes = [
    { value: 'asc', label: 'ASC' },
    { value: 'desc', label: 'DESC' },
  ];
  const selectedSortType = useProductQueryStore((s) => s.productQuery.sortType);
  const setSelectedSortType = useProductQueryStore((s) => s.setSortType);

  const currentSortType = sortTypes.find(
    (sortType) => sortType.value === selectedSortType
  );

  return (
    <Box
      marginLeft={4}
      marginBottom={2}
      border={'1px solid'}
      borderRadius={5}
      outline={'none'}
    >
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            {currentSortType?.label || 'ASC'}
            <LuChevronDown />
          </Button>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content>
            {sortTypes.map((sortType) => (
              <MenuItem
                onClick={() => setSelectedSortType(sortType.value)}
                key={sortType.value}
                value={sortType.value}
              >
                {sortType.label}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export default SortTypeSelector;
