import React from 'react';

const Button = ({ children, ...restOfProps }) => {
  return (
    <button {...restOfProps}>
      {children}
    </button>
  );
};

export default Button;
