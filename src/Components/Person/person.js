import React from 'react';
import { usePersonFetch } from '../../bus/person/hooks/usePersonFetch';

export const Person = () => {
  const { isFetching, data, error } = usePersonFetch();

  const errorMessage = error.status === 404 && (
    <p>Not found!</p>
  );

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  return (
    <>
      <h1>Person</h1>
      {errorMessage}
      {loader}
      {data.name}
    </>
  );
};
