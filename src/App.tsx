import NavBar from './components/NavBar';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white min-h-screen">
      <NavBar />
      <div className="grid sm:grid-cols-2">
        <div className="hidden sm:block">aside</div>
        <div>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
