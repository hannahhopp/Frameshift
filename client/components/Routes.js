import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import { Gallery, SingleDream } from './dreams';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/dreams' component={ Gallery } />
      <Route path='/dreams/:id' component={ SingleDream } />
    </Switch>
  </div>
)

export default Routes;
