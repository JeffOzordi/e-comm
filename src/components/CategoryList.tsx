import { Heading, HStack, ListItem, ListRoot, Spinner, Text } from '@chakra-ui/react';
import useCategories from '../hooks/useCategories';
import { Category } from './../hooks/useCategories';

interface Props {
  onSelectCategory: ( category : Category) => void
}

const CategoryList = ({ onSelectCategory }: Props) => {
  const { categories, error, isLoading } = useCategories();

  if (isLoading) return <Spinner/>;

  if (error) return;
  return (
    <ListRoot>
      <Heading fontSize={'2xl'}>Categories</Heading>
      {categories?.map((category) => (
        <ListItem listStyle={'none'} key={category.slug}>
          <HStack padding={2}>
            <Text onClick={() => onSelectCategory(category)} fontSize={'lg'} className='cursor-pointer hover:underline transition-all ease-in-out'>{category.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default CategoryList;
