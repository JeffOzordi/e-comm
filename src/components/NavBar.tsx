import logo from '../assets/244396834_683283099297966_5993122135789503446_n.jpg';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {

  return (
    <nav className="flex items-center h-20 justify-between gap-">
      <img src={logo} className="w-12 h-12 rounded-2xl" />
      <ThemeToggle/>
    </nav>
  );
};

export default NavBar;
