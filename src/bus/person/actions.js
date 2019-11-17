import { types } from './types';

import { api } from '../../api';

export const personActions = Object.freeze({
  // Sync
  startFetching: () => ({
    type: types.PERSON_START_FETCHING,
  }),

  stopFetching: () => ({
    type: types.PERSON_STOP_FETCHING,
  }),

  fill: (payload) => ({
    type: types.PERSON_FILL,
    payload,
  }),

  setFetchingError: (error) => ({
    type: types.PERSON_SET_FETCHING_ERROR,
    error: true,
    payload: error,
  }),

  // Async
  fetchAsync: (id) => async (dispatch) => {
    dispatch({
      type: types.PERSON_FETCH_ASYNC,
    });

    dispatch(personActions.startFetching());

    const response = await api.person.fetch(id);

    if (response.status === 200) {
      const person = await response.json();

      dispatch(personActions.fill(person));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(personActions.setFetchingError(error));
    }

    dispatch(personActions.stopFetching());
  },
});
