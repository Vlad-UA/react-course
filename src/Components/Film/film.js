import React from 'react';
import { useFilmFetch } from '../../bus/film/hooks/useFilmFetch';

export const Film = () => {
  const { isFetching, data, error } = useFilmFetch();

  const errorMessage = error.status === 404 && (
    <p>Not found!</p>
  );

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  return (
    <>
      <h1>Film</h1>
      {errorMessage}
      {loader}
      {data.title}
    </>
  );
};
