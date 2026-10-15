import { Box, Menu, Button, Portal, MenuItem } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

interface Props {
  onSelectSortType: (sortType: string) => void;
  selectedSortType: string | undefined;
}

const SortTypeSelector = ({ onSelectSortType, selectedSortType}: Props) => {
  const sortTypes = [
    { value: 'asc', label: 'ASC' },
    { value: 'desc', label: 'DESC' },
  ];

  const currentSortType = sortTypes.find(
    (sortType) => sortType.value === selectedSortType
  );

  return (
    <Box marginLeft={4} marginBottom={2}>
      <Menu.Root>
        <Menu.Trigger>
          <Button variant="outline">
            {currentSortType?.label || 'ASC'}
            <LuChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortTypes.map((sortType) => (
                <MenuItem
                  onClick={() => onSelectSortType(sortType.value)}
                  key={sortType.value}
                  value={sortType.value}
                >
                  {sortType.label}
                </MenuItem>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortTypeSelector;
