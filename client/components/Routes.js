import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import { Gallery } from './dreams';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/dreams' component={ Gallery } />
    </Switch>
  </div>
)

export default Routes;
