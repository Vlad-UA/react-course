import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filmActions } from '../actions';

export const useFilmFetch = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filmActions.fetchAsync(id));
  }, [dispatch, id]);

  const { data, isFetching, error } = useSelector((state) => state.film);

  return {
    data,
    isFetching,
    error,
  };
};
