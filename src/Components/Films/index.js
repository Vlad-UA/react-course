import React from 'react';
import { useFilmsFetch } from '../../bus/films/hooks/useFilmsFetch';

export const Films = () => {
  const { isFetching, data, error } = useFilmsFetch();

  const errorMessage = error.status === 404 && (
    <p>Not found!</p>
  );

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  const list = isFetching || data.map(({ title }) => (
    <li key={title}>{title}</li>
  ));

  return (
    <>
      <h1>Films</h1>
      {errorMessage}
      {loader}
      {list}
    </>
  );
};
