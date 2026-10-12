
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@chakra-ui/react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      borderRadius={25}
      className="cursor-pointer rounded-full p-2 shadow-md shadow-purple-400 transition-all ease-in-out hover:text-purple-400 dark:shadow-amber-400 dark:hover:text-amber-400"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default ThemeToggle;
