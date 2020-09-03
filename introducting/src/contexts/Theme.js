import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const defaultValues = {
  backgroundColor: '#555',
  textColor: '#333',
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultValues);

  const changeTheme = (type) => {
    switch (type) {
      case 'LIGHT':
        setTheme({ backgroundColor: '#999', textColor: '#333', });
        break;
      case 'DARK':
        setTheme({ backgroundColor: '#000', textColor: '#fff', });
        break;
      default:
        break;
    }
  }

  return (
    <ThemeContext.Provider value={{ ...theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};