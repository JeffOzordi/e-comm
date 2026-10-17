
import categories from '../data/categories';

export interface Category {
  slug: string;
  name: string;
  url: string;
}

const useCategories = () => ({
  data: categories,
  isLoading: false,
  error: null,
});

export default useCategories;
