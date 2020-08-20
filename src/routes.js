import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Characters from './pages/character';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/characters/:id" component={Characters} />
    </Switch>
  </BrowserRouter>
);

export default Routes;