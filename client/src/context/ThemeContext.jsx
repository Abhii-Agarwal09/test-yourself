import React, { createContext, useState } from 'react';
import { themes } from '../themes';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  const handleThemeChange = (themeType) => {
    switch (themeType) {
      case 'red-green':
        setTheme('red-green');
        break;
      case 'blue-yellow':
        setTheme('blue-yellow');
        break;
      case 'total':
        setTheme('total');
        break;
      default:
        setTheme('default');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
