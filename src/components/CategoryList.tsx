import {
  Heading,
  HStack,
  ListItem,
  ListRoot,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useCategories from '../hooks/useCategories';
import { Category } from './../hooks/useCategories';

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | undefined;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data: categories, error, isLoading } = useCategories();

  if (isLoading) return <Spinner />;

  if (error) return;
  return (
    <ListRoot>
      {categories?.map((category) => (
        <ListItem listStyle={'none'} key={category.slug}>
          <HStack padding={2}>
            <Text
              textDecoration={
                category.slug === selectedCategory?.slug ? 'underline' : ''
              }
              color={
                category.slug === selectedCategory?.slug ? 'orange.700' : ''
              }
              fontWeight={
                category.slug === selectedCategory?.slug ? 'bold' : 'normal'
              }
              onClick={() => onSelectCategory(category)}
              fontSize={'lg'}
              className="cursor-pointer hover:underline transition-all ease-in-out"
            >
              {category.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default CategoryList;
