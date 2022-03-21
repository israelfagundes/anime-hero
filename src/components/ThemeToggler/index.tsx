import { Button } from 'antd';
import { HiSun, HiMoon } from 'react-icons/hi';

import { useTheme } from '../../hooks/useTheme';

function ThemeToggler() {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <Button
      ghost
      type={currentTheme === 'light' ? 'primary' : 'dashed'}
      shape="circle"
      onClick={toggleTheme}
    >
      {currentTheme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
    </Button>
  );
}

export default ThemeToggler;
