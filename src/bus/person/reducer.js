import { types } from './types';

const initialState = {
  data: [],
  isFetching: false,
  error: false,
};

export const personReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PERSON_START_FETCHING:
      return { ...state, isFetching: true };
    case types.PERSON_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.PERSON_SET_FETCHING_ERROR:
      return { ...state, error: payload };
    case types.PERSON_FILL:
      return { ...state, data: payload };

    default:
      return state;
  }
};
