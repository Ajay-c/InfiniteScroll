import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './Components/home.js';
import Login from './Components/Login.js';

import './App.css';

function App(props,user) {

  return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <HomePage
                  {...props}

                />
              )}
            />
            <Route
              exact
              path={"/home"}
              render={props => (
                <Login
                  {...props}

                />
              )}
            />

          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
