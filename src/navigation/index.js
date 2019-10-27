import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { book } from './book';
import { News } from '../Components/News';
import { history } from './history';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path={book.news} component={News} />
    </Switch>
  </Router>
);
