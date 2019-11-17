import { types } from './types';

import { api } from '../../api';

export const filmActions = Object.freeze({
  // Sync
  startFetching: () => ({
    type: types.FILM_START_FETCHING,
  }),

  stopFetching: () => ({
    type: types.FILM_STOP_FETCHING,
  }),

  fill: (payload) => ({
    type: types.FILM_FILL,
    payload,
  }),

  setFetchingError: (error) => ({
    type: types.FILM_SET_FETCHING_ERROR,
    error: true,
    payload: error,
  }),

  // Async
  fetchAsync: (id) => async (dispatch) => {
    dispatch({
      type: types.FILM_FETCH_ASYNC,
    });

    dispatch(filmActions.startFetching());

    const response = await api.film.fetch(id);

    if (response.status === 200) {
      const film = await response.json();

      dispatch(filmActions.fill(film));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(filmActions.setFetchingError(error));
    }

    dispatch(filmActions.stopFetching());
  },
});
