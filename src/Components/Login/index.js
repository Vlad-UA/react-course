import React from 'react';
import { useLogin } from '../../authentification/useLogin';

export const Login = () => {
  const { login } = useLogin();

  return (
    <button type="button" onClick={login}>Login</button>
  );
};
