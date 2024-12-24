import { useState } from 'react';
import Navbar from './navbar';

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inline styles for light and dark themes
  const lightTheme = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  
  };

  const darkTheme = {
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s',
    height: '750px',
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={isDarkMode ? darkTheme : lightTheme}>
     <Navbar/>
      <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          backgroundColor: isDarkMode ? '#fff' : '#333',
          color: isDarkMode ? '#333' : '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Toggle Theme
      </button>
      <h1>hello smriti and jasika</h1>
    </div>
  );
}

export default ThemeToggler;
