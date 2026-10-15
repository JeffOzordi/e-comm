import { Box, HStack } from '@chakra-ui/react';
import CategoryList from './components/CategoryList';
import NavBar from './components/NavBar';
import ProductGrid from './components/ProductGrid';
import { useState } from 'react';
import { Category } from './hooks/useCategories';
import SortSelector from './components/SortSelector';
import SortTypeSelector from './components/SortTypeSelector';
import ProductHeading from './components/ProductHeading';

export interface ProductQuery {
  category?: Category;
  sortOrder?: string;
  sortType?: string;
  searchText?: string;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>({});
  return (
    <div
      className="min-h-screen 
    bg-white text-black 
    dark:bg-black dark:text-white"
    >
      <NavBar
        onSearch={(searchText) =>
          setProductQuery((prev) => ({ ...prev, searchText }))
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
        <Box padding={3} className="hidden lg:block">
          <CategoryList
            selectedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setProductQuery((prev) => ({ ...prev, category }))
            }
          />
        </Box>

        <main>
          <ProductHeading productQuery={productQuery} />
          <HStack>
            <SortSelector
              selectedSortOrder={productQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setProductQuery((prev) => ({ ...prev, sortOrder }))
              }
            />
            <SortTypeSelector
              onSelectSortType={(sortType) =>
                setProductQuery((prev) => ({ ...prev, sortType }))
              }
              selectedSortType={productQuery.sortType}
            />
          </HStack>
          <ProductGrid productQuery={productQuery} />
        </main>
      </div>
    </div>
  );
}

export default App;
