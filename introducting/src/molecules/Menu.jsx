import React from 'react';
import {
  Link
} from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/settings">Settingsy</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Menu;
