import { CREATE_NEW_USER } from './actions';

const initialState = {
  isCreated: false,
  firstName: '',
  surname: '',
  age: 0,
  email: '',
  sex: '',
  speciality: '',
  password: '',
  passwordConfirm: '',
};

export const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_USER:
      return { ...state, ...payload, isCreated: true };

    default:
      return state;
  }
};
