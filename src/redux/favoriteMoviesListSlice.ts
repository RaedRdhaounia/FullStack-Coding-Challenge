// ==============================|| moviesSlice module ||============================== //

// ==============================|| IMPORTS

//-- toolkit slice methods imports
import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {gettopRatedMovies} from '../api/generator/methodes';

export const fetchTopRatedMovies = createAsyncThunk(
  'movies/fetchTopRatedMovies',
  async (page?: number) => {
    const movies = await gettopRatedMovies(page);
    return movies;
  },
);
//-- Movie model add as interface
import {Movie} from '../constants/';

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
  currentPage: 1,
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
      if (!state.favorites.some((fav) => fav.id === action.payload.id)) {
        state.favorites = [...state.favorites, action.payload];
      }
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
          state.currentPage = action.payload.page;
          state.topRated = [...state.topRated, ...fetchedMovies.results];
        }
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'Oops ! Something was wrong';
      });
  },
});

//-------- export actions
export const {
  addToFavorites,
  removeFromFavorites,
  setCurrentPage,
  setTotalPage,
} = moviesSlice.actions;

//-------- export reducer
export default moviesSlice.reducer;
