// ==============================|| moviesSlice module ||============================== //

// ==============================|| IMPORTS

//-- toolkit slice methods imports
import {createSlice} from '@reduxjs/toolkit';

import {initialState} from '../constants';
import {fetchTopRatedMovies} from '../utils';
//-------- locale state interface

// ==============================|| create new slice for movies ||============================== //

const moviesSlice = createSlice({
  //-------- state name
  name: 'movies',
  //-------- initial state declaration
  initialState,
  //-------- we don't have any reducer for instance
  reducers: {},
  //-------- async reducers declaration (fetching data)
  extraReducers: (builder) => {
    builder
      //-------- loading case
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      //-------- success case update state data
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        const fetchedMovies = action.payload;
        state.topRated = fetchedMovies.results;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'Oops ! Something was wrong';
      });
  },
});

//-------- export reducer
export default moviesSlice.reducer;
