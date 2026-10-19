import { Box, CloseButton, HStack, Heading } from '@chakra-ui/react'
import CategoryList from '../components/CategoryList'
import NavBar from '../components/NavBar'
import ProductGrid from '../components/ProductGrid'
import ProductHeading from '../components/ProductHeading'
import SortSelector from '../components/SortSelector'
import SortTypeSelector from '../components/SortTypeSelector'
import useMenuStore from '../menuStore'

const HomePage = () => {
  const { isCategoryMenuOpen, setCategoryMenuOpen } = useMenuStore();
  return ( 
    <div
      className="h-screen overflow-hidden
      bg-white text-black
      dark:bg-black dark:text-white"
    >

      

      <div className="grid h-[calc(100vh-70px)] grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)]">
        {/* Permanent sidebar on large screens */}
        <Box
          padding={3}
          className="hidden lg:block h-full overflow-y-auto hide-scrollbar"
        >
          <CategoryList />
        </Box>

        <Box
          id="scrollableDiv"
          marginY={1}
          borderTopLeftRadius={30}
          className="h-full min-w-0 overflow-y-auto bg-gray-100 dark:bg-gray-900 hide-scrollbar text-center lg:text-left"
        >
          <ProductHeading />

          <HStack
            className="flex-wrap px-2 sm:justify-center sm:gap-4 lg:justify-start"
          >
            <SortSelector />

            <SortTypeSelector />
          </HStack>

          <ProductGrid />
        </Box>
      </div>
    </div>
  )
}

export default HomePage