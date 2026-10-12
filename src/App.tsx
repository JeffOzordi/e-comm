import NavBar from './components/NavBar';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <NavBar />

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          aside
        </aside>

        <main>
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}

export default App;