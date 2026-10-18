import { Menu, Button, Portal, MenuItem, Box } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';
import useProductQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: 'rating', label: 'Popularity' },
    { value: 'price', label: 'Price' },
    { value: 'discountPercentage', label: 'Discount' },
    { value: 'shippingInformation', label: 'Shipment speed' },
  ];
  const setSelectedSortOrder = useProductQueryStore(s => s.setSortOrder)
  const selectedSortOrder = useProductQueryStore(s => s.productQuery.sortOrder)

  const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder)
  return (
    <Box marginLeft={4} marginBottom={2} border={'1px solid'} borderRadius={5} outline={'none'}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            Order by:  { currentSortOrder?.label || 'Relavance' }
            <LuChevronDown />
          </Button>
        </Menu.Trigger>

          <Menu.Positioner>
            <Menu.Content>
              {sortOrders.map((order) => (
                <MenuItem
                  onClick={() => setSelectedSortOrder(order.value)}
                  key={order.value}
                  value={order.value}
                >
                  {order.label}
                </MenuItem>
                
              ))}
            </Menu.Content>
          </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
