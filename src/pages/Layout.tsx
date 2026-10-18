import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import useMenuStore from '../menuStore';

const Layout = () => {
  const  setCategoryMenuOpen = useMenuStore(s => s.setCategoryMenuOpen);
  return (
    <>
        <NavBar onMenuClick={() => setCategoryMenuOpen(true)}/>
        <Outlet />
    </>
  )
}

export default Layout