import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { defaultValues } from './contexts/Theme';
import Button from './atoms/Button';
import Dumb from './atoms/Dumb';

import { DEFAULT_TEXT } from './data/literals';
import Counter from './molecules/Counter';
import useInput from './hooks/useInput';
import Header from './molecules/Header';
import Logo from './molecules/Logo';
import Image from './atoms/Image';
// import { ThemeProvider } from './contexts/Theme';
import Settings from './layouts/Settings';
import Menu from './molecules/Menu';
import Blog from './layouts/Blog';

// import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/defaultStyles.scss';

// const array = [
//   { text: 'tak'},
//   { text: 'nie'},
//   { text: 'być może'},
// ];


const arrayOfString = [
  'SuperArtDirector',
  'Jeszcze Lepszy Head',
  'Potężny Paweł',
]

const user = {
  islogged: false,
  isChecked: true,
}

const App = () => {
  const { value, input } = useInput({
    defaultValue: 'Target',
  });

  if (!user.isChecked) {
    return <div>loading</div>
  }

  return (
    <div className="container">
      <ThemeProvider theme={defaultValues} >
        <Router>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/dashboard">
            Dashboard
          </Route>
          <Route path="/blog/:category/:id">
            <Blog />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/login">
            {/* Login Form */}
            { user.islogged 
              ? <Redirect to="/dashboard" />
              : <div>Form Login</div>
            }
          </Route>
        </Router>
      </ThemeProvider>
    </div>
  );
}




export default App;
