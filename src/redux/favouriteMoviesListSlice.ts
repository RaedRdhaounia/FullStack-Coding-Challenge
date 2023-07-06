// ==============================|| moviesSlice module ||============================== //

// ==============================|| IMPORTS

//-- toolkit slice methods imports
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//-- async fetch movies list by top rated imports
import {fetchTopRatedMovies} from '../utils';

//-- Movie model add as interface
import {Movie} from '../constants/types/reduxState';

//-------- locale state interface
interface MoviesState {
  favorites: Movie[];
  topRated: Movie[];
  currentPage: number;
  totalPages: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

//-------- initialized state
const initialState: MoviesState = {
  favorites: [],
  topRated: [],
  currentPage: 0,
  totalPages: 0,
  loading: 'idle',
  error: null,
};

// ==============================|| create new slice for movies ||============================== //

const moviesSlice = createSlice({
  //-------- state name
  name: 'movies',
  //-------- initial state declaration
  initialState,
  //-------- reducers declaration (statics)
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload,
      );
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPages = action.payload;
    },
  },
  //-------- async reducers declaration (fetching data)
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        const fetchedMovies = action.payload;
        state.totalPages = action.payload.total_results;
        if (state.currentPage === 1) {
          state.topRated = fetchedMovies.results;
          state.currentPage = 1;
        } else {
          if (state.currentPage < action.payload.page) {
            state.currentPage = action.payload.page;
            state.topRated = [...state.topRated, ...fetchedMovies.results];
          }
        }
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'Oops ! Something was wrong';
      });
  },
});

//-------- export actions
export const {addToFavorites, removeFromFavorites} = moviesSlice.actions;

//-------- export reducer
export default moviesSlice.reducer;
