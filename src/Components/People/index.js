import React from 'react';
import { usePeopleFetch } from '../../bus/people/hooks/usePeopleFetch';

export const People = () => {
  const { isFetching, data, error } = usePeopleFetch();

  const errorMessage = error.status === 404 && (
    <p>Not found!</p>
  );

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  const list = isFetching || data.map(({ name }) => (
    <li key={name}>{name}</li>
  ));

  return (
    <>
      <h1>People</h1>
      {errorMessage}
      {loader}
      {list}
    </>
  );
};
