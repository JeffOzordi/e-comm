import useCategories from './useCategories';

const useCategory = (slug?: string) => {
  const { data: categories } = useCategories();
  return categories.find((g) => g.slug === slug);
};

export default useCategory;
