import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { book } from './book';
import { useStatus } from '../authentification/useStatus';

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useStatus();

  return (
    <Route
      {...rest}
      render={({ location }) => (isAuthenticated() ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: book.login,
            state: { from: location },
          }}
        />
      ))}
    />
  );
};
