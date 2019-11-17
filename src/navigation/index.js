import React from 'react';
import {
  Switch, Route, Router, Redirect,
} from 'react-router-dom';
import { book } from './book';
import { News } from '../Components/News';
import { Page404 } from '../Components/Page404';
import { Login } from '../Components/Login';
import { People } from '../Components/People';
import { Person } from '../Components/Person/person';
import { StudentRegistration } from '../Components/StudentRegistration';
import { Student } from '../Components/Student';
import { history } from './history';
import { PrivateRoute } from './PrivateRoute';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path={book.news}>
        <News />
      </PrivateRoute>
      <Route exact path={book.main} component={People} />
      <Route exact path={book.student} component={Student} />
      <Route exact path={book.login} component={Login} />
      <Route exact path={book.studentRegistration} component={StudentRegistration} />
      <Route exact path={book.unknown} component={Page404} />
      <Route exact path={book.people} component={People} />
      <Route exact path={book.person} component={Person} />
      <Redirect to={book.unknown} />
    </Switch>
  </Router>
);
