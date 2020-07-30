import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';
import Button from '../atoms/Button';

const Logo = () => {
  const { backgroundColor, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <a href="/">
        <div style={{ width: 100, height: 100, backgroundColor }}></div>
      </a>
      <Button type="button" onClick={() => changeTheme("DARK")}>Ciemny styl</Button>
      <Button type="button" onClick={() => changeTheme("LIGHT")}>Jasny styl</Button>
    </div>
  );
};

export default Logo;
