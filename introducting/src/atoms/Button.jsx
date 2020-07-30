import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';

const Button = ({ children, ...restOfProps }) => {
  const { backgroundColor } = useContext(ThemeContext);

  return (
    <button style={{ backgroundColor }}  {...restOfProps}>
      {children}
    </button>
  );
};

export default Button;
