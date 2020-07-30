import React from 'react';
import Logo from './Logo';

const Header = ({ children }) => {

  return (
    <header>
      {children}
      <Logo />
    </header>
  );
};

export default Header;
