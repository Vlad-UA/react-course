import { combineReducers } from 'redux';
import { studentReducer as student } from '../bus/student/reducer';
import { peopleReducer as people } from '../bus/people/reducer';
import { personReducer as person } from '../bus/person/reducer';
import { filmsReducer as films } from '../bus/films/reducer';
import { filmReducer as film } from '../bus/film/reducer';

export const rootReducer = combineReducers({
  student,
  people,
  person,
  film,
  films,
});
