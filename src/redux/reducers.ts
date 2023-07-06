// ==============================|| moviesSlice module ||============================== //

// ==============================|| IMPORTS

//-- toolkit combineReducers method import
import {combineReducers} from '@reduxjs/toolkit';

//--  SliceReducer movie import
import moviesReducer from './favoriteMoviesListSlice';

// ==============================|| create rootReducer ||============================== //

//-------- combine reducer imports
const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
