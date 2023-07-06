import {combineReducers} from '@reduxjs/toolkit';
import moviesReducer from './favouriteMoviesListSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
