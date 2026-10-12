import useGames from "../hooks/useGames";

const ProductGrid = () => {
    const {products, error} = useGames()

  return (
    <>
      {error && 
        <div className="text-red-400 bg-red-200 rounded border-red-400 px-3 py-2 border-2 flex justify-center w-auto">
          {error}
        </div>
      }
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductGrid;
