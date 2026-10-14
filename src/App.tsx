import { Box } from '@chakra-ui/react';
import CategoryList from './components/CategoryList';
import NavBar from './components/NavBar';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div
      className="min-h-screen 
      min-w-screen
    bg-white text-black 
    dark:bg-black dark:text-white"
    >
      <NavBar />

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
        <Box padding={5} className="hidden lg:block">
          <CategoryList/>
        </Box>

        <main>
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
