import useGames from '../hooks/useGames';
import Error from './Error';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const { products, error } = useGames();

  return (
    <>
      {error && <Error message={error} />}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-1 gap-y-4 p-3 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
