import { Menu, Button, Portal, MenuItem, Box } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string | undefined
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: 'rating', label: 'Popularity' },
    { value: 'price', label: 'Price' },
    { value: 'discountPercentage', label: 'Discount' },
    { value: 'shippingInformation', label: 'Shipment speed' },
  ];
  return (
    <Box marginLeft={4} marginBottom={2}>
      <Menu.Root>
        <Menu.Trigger>
          <Button variant="outline">
            Order by:  { selectedSortOrder ? selectedSortOrder : 'Relevance'}
            <LuChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrders.map((order) => (
                <MenuItem
                  onClick={() => onSelectSortOrder(order.value)}
                  key={order.value}
                  value={order.value}
                >
                  {order.label}
                </MenuItem>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
