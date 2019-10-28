import React from 'react';
import {
  Switch, Route, Router, Redirect,
} from 'react-router-dom';
import { book } from './book';
import { News } from '../Components/News';
import { Page404 } from '../Components/Page404';
import { Login } from '../Components/Login';
import { history } from './history';
import { PrivateRoute } from './PrivateRoute';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path={book.news}>
        <News />
      </PrivateRoute>
      <Route exact path={book.login} component={Login} />
      <Route exact path={book.unknown} component={Page404} />
      <Redirect to={book.unknown} />
    </Switch>
  </Router>
);
