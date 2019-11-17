import { types } from './types';

import { api } from '../../api';

export const filmsActions = Object.freeze({
  // Sync
  startFetching: () => ({
    type: types.FILMS_START_FETCHING,
  }),

  stopFetching: () => ({
    type: types.FILMS_STOP_FETCHING,
  }),

  fill: (payload) => ({
    type: types.FILMS_FILL,
    payload,
  }),

  setFetchingError: (error) => ({
    type: types.FILMS_SET_FETCHING_ERROR,
    error: true,
    payload: error,
  }),

  // Async
  fetchAsync: () => async (dispatch) => {
    dispatch({
      type: types.FILMS_FETCH_ASYNC,
    });

    dispatch(filmsActions.startFetching());

    const response = await api.films.fetch();

    if (response.status === 200) {
      const { results } = await response.json();

      dispatch(filmsActions.fill(results));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(filmsActions.setFetchingError(error));
    }

    dispatch(filmsActions.stopFetching());
  },
});
