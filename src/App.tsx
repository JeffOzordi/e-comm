import { Box } from '@chakra-ui/react';
import CategoryList from './components/CategoryList';
import NavBar from './components/NavBar';
import ProductGrid from './components/ProductGrid';
import { useState } from 'react';
import { Category } from './hooks/useCategories';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <div
      className="min-h-screen 
      min-w-screen
    bg-white text-black 
    dark:bg-black dark:text-white p-2"
    >
      <NavBar />

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
        <Box padding={3} className="hidden lg:block">
          <CategoryList onSelectCategory={(category) => setSelectedCategory(category)}/>
        </Box>

        <main>
          <ProductGrid selectedCategory={selectedCategory} />
        </main>
      </div>
    </div>
  );
}

export default App;
