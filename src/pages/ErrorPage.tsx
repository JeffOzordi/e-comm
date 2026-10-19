import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Error from '../components/Error';
import NavBar from '../components/NavBar';
import useMenuStore from '../menuStore';
import { Box } from '@chakra-ui/react';

const ErrorPage = () => {
  const setCategoryMenuOpen = useMenuStore((s) => s.setCategoryMenuOpen);
  const error = useRouteError();
  return (
    <>
      <NavBar onMenuClick={() => setCategoryMenuOpen(true)} />
      <Box padding={5}>
        <Error
          message={
            isRouteErrorResponse(error)
              ? 'OOPS...This page does not exist'
              : 'An unexpected error occured'
          }
        />
      </Box>
    </>
  );
};

export default ErrorPage;
