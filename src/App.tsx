import { Box, Heading, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import CategoryList from './components/CategoryList';
import NavBar from './components/NavBar';
import ProductGrid from './components/ProductGrid';
import { Category } from './hooks/useCategories';
import SortSelector from './components/SortSelector';
import SortTypeSelector from './components/SortTypeSelector';
import ProductHeading from './components/ProductHeading';

export interface ProductQuery {
  categorySlug?: string;
  sortOrder?: string;
  sortType?: string;
  searchText?: string;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>({});
  const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);

  const handleSelectCategory = (category: Category) => {
    setProductQuery((prev) => ({ ...prev, categorySlug: category.slug }));
    setCategoryMenuOpen(false);
  };

  return (
    <div
      className="h-screen overflow-hidden
      bg-white text-black
      dark:bg-black dark:text-white"
    >
      <NavBar
        onSearch={(searchText) =>
          setProductQuery((prev) => ({ ...prev, searchText }))
        }
        onMenuClick={() => setCategoryMenuOpen(true)}
      />

      {/* Mobile/tablet category side panel */}
      {isCategoryMenuOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close category menu"
            className="fixed inset-0 z-40 cursor-default bg-black/50"
            onClick={() => setCategoryMenuOpen(false)}
          />

          <aside
            className="fixed inset-y-0 left-0 z-50
            w-72 max-w-[85vw] overflow-y-auto hide-scrollbar
            border-r border-gray-200 bg-white p-4
            dark:border-gray-800 dark:bg-black"
          >
            <div className="mb-4 flex items-center justify-between">
              <Heading fontSize={'2xl'}>Categories</Heading>

              <button
                type="button"
                aria-label="Close category menu"
                onClick={() => setCategoryMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </button>
            </div>

            <CategoryList
              selectedCategorySlug={productQuery.categorySlug}
              onSelectCategory={handleSelectCategory}
            />
          </aside>
        </div>
      )}

      <div className="grid h-[calc(100vh-70px)] grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)]">
        {/* Permanent sidebar on large screens */}
        <Box
          padding={3}
          className="hidden lg:block h-full overflow-y-auto hide-scrollbar"
        >
          <CategoryList
            selectedCategorySlug={productQuery.categorySlug}
            onSelectCategory={handleSelectCategory}
          />
        </Box>

        <Box id="scrollableDiv"
          marginY={1}
          borderTopLeftRadius={30}
          className="h-full min-w-0 overflow-y-auto bg-gray-100 dark:bg-gray-900 hide-scrollbar"
        >
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
        </Box>
      </div>
    </div>
  );
}

export default App;
