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
  selectedCategorySlug?: string;
}

const CategoryList = ({ selectedCategorySlug, onSelectCategory }: Props) => {
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
                category.slug === selectedCategorySlug ? 'underline' : ''
              }
              color={
                category.slug === selectedCategorySlug ? 'orange.700' : ''
              }
              fontWeight={
                category.slug === selectedCategorySlug ? 'bold' : 'normal'
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
