import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const defaultValues = {
  backgroundColor: '#999',
  textColor: '#333',
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultValues);
  
  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};