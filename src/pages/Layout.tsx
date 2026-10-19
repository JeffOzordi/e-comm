import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import useMenuStore from '../menuStore';
import {CloseButton, Heading } from '@chakra-ui/react';
import CategoryList from '../components/CategoryList';

const Layout = () => {
  const {isCategoryMenuOpen, setCategoryMenuOpen} = useMenuStore();
  return (
    <>
      <NavBar onMenuClick={() => setCategoryMenuOpen(true)} />
        {/* Mobile/tablet category side panel */}
      {isCategoryMenuOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close category menu"
            className="fixed inset-0 z-40 cursor-default bg-black/50"
            onClick={() => setCategoryMenuOpen(false)}
          />

          <aside
            className="fixed inset-y-0 left-0 z-50
            w-72 max-w-[85vw] overflow-y-auto hide-scrollbar
            border-r border-gray-200 bg-white p-4
            dark:border-gray-800 dark:bg-black"
          >
            <div className="mb-4 flex items-center justify-between">
              <Heading fontSize={'2xl'}>Categories</Heading>
              <CloseButton
                size={'sm'}
                aria-label="Close category menu"
                onClick={() => setCategoryMenuOpen(false)}
              />
            </div>

            <CategoryList />
          </aside>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
