import useData from './useData';

export interface Category {
  slug: string;
  name: string;
  url: string;
}

const useCategories = () => {
  const {
    data: categories,
    error,
    isLoading
  } = useData<Category[]>('/products/categories');

  return {
    categories: categories ?? [],
    error,
    isLoading
  };
};

export default useCategories;
