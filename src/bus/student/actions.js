export const CREATE_NEW_USER = Symbol('student/actions/CREATE_NEW_USER');

export const studentActions = Object.freeze({
  createNewUser: (payload) => ({ type: CREATE_NEW_USER, payload }),
});
