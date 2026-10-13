import React from 'react';
import useCategories from '../hooks/useCategories';

const CategoryList = () => {
  const { categories, error, isLoading } = useCategories();

  console.log(categories);
  if (error) return;
  return (
    <ul>
      {categories?.map((category) => (
        <li key={category.slug}>{category.name}</li>
      ))}
      
    </ul>
  );
};

export default CategoryList;
