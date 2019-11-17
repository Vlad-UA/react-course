import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { personActions } from '../actions';

export const usePersonFetch = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(personActions.fetchAsync(id));
  }, [dispatch, id]);

  const { data, isFetching, error } = useSelector((state) => state.person);

  return {
    data,
    isFetching,
    error,
  };
};
