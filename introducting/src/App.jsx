import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { defaultValues } from './contexts/Theme';
import Settings from './layouts/Settings';
import Blog from './layouts/Blog';
import { http } from './utils/httpClient';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/defaultStyles.scss';

const user = {
  islogged: false,
  isChecked: true,
}

const API_ENDPOINT = 'https://swapi.dev/api/planetss/1/';

const App = () => {
  const [planet, setPlanet] = useState({ name: '', terrain: '' });

  useEffect(
    () => {
      const getData = async () => {
        const res = await http.get(API_ENDPOINT);

        if (res) {
          setPlanet(res);
        }
      }

      getData();
    },
    [],
  );

  if (!user.isChecked) {
    return <div>loading</div>
  }

  return (
    <div className="container">
      <div className="py-5">
        <div>
          <span className="mr-2">Name:</span>
          <strong>{planet.name}</strong>
        </div>
        <div>
          <span className="mr-2">Terrain:</span>
          <strong>{planet.terrain}</strong>
        </div>
      </div>
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
