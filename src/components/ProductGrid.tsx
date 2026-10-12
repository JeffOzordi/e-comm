import useGames from '../hooks/useGames';
import Error from './Error';

const ProductGrid = () => {
  const { products, error } = useGames();

  return (
    <>
      {error && <Error message={error} />}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductGrid;
