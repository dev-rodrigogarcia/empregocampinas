import React from 'react';
import { Header } from './Theme/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './Views/Home';
import { Footer } from './Theme/Footer';

const App = () => (
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/vagas" exact>
          <h1>vagas</h1>
        </Route>
        <Route path="/contato" exact>
          <h1>contato</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
)

export { App }
