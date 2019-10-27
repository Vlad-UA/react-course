import React from 'react';
import {
  Switch, Route, Router, Redirect,
} from 'react-router-dom';
import { book } from './book';
import { News } from '../Components/News';
import { Page404 } from '../Components/Page404';
import { history } from './history';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={book.news} component={News} />
      <Route exact path={book.unknown} component={Page404} />
      <Redirect to={book.unknown} />
    </Switch>
  </Router>
);
