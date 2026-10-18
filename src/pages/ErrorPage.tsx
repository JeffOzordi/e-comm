import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Error from '../components/Error';
import NavBar from '../components/NavBar';
import useMenuStore from '../menuStore';

const ErrorPage = () => {
  const setCategoryMenuOpen = useMenuStore((s) => s.setCategoryMenuOpen);
  const error = useRouteError();
  return (
    <>
      <NavBar onMenuClick={() => setCategoryMenuOpen(true)} />
      <Error
        message={
          isRouteErrorResponse(error)
            ? 'OOPS...This page does not exist'
            : 'An unexpected error occured'
        }
      />
    </>
  );
};

export default ErrorPage;
