import React, { useEffect } from 'react';

const ButtonWithSelfClick = ({ children, count, onClick, ...restOfProps }) => {
  useEffect(
    () => {
      console.log('Current count is: ' + count);
    },
    [count],
  );

  const specialClick = () => {
    onClick(0);
  }
  
  return (
    <button {...restOfProps} onClick={() => specialClick()}>
      {children}
    </button>
  );
};

export default ButtonWithSelfClick;