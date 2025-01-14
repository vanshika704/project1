import { useContext } from 'react';
import { ThemeContext } from './contextapi';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
};

export default ThemeToggleButton;
