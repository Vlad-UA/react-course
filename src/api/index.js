import { root } from './config';

export const api = Object.freeze({
  people: {
    fetch: () => fetch(`${root}/people/`, {
      method: 'GET',
    }),
  },
  person: {
    fetch: (id) => fetch(`${root}/people/${id}/`, {
      method: 'GET',
    }),
  },
});
