import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './pages/Home/index.jsx'
import { About } from './pages/About/index.jsx'

export function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/router">Home</Link>
          </li>
          <li>
            <Link to="/router/about">About</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/router">
            <Home />
          </Route>
          <Route path="/router/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
