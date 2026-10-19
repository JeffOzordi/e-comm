
import { Box } from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import logo from '../assets/244396834_683283099297966_5993122135789503446_n.jpg';
import ThemeToggle from './ThemeToggle';
import SearchInput from './SearchInput';

interface Props {
  onMenuClick: () => void;
}

const NavBar = ({ onMenuClick }: Props) => {
  return (
    <Box
      paddingX={2}
      className="flex h-20 items-center gap-2"
    >
      <button
        type="button"
        aria-label="Open category menu"
        onClick={onMenuClick}
        className="shrink-0 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
      >
        <Menu size={24} />
      </button>

      <img
        src={logo}
        alt="Store logo"
        className="h-12 w-12 shrink-0 rounded-2xl"
      />
      <SearchInput/>
      <ThemeToggle />
    </Box>
  );
};

export default NavBar;
