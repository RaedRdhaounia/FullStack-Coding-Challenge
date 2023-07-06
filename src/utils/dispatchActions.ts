import {createAsyncThunk} from '@reduxjs/toolkit';
import {gettopRatedMovies} from '../api/generator/methodes';

export const fetchTopRatedMovies = createAsyncThunk(
  'movies/fetchTopRatedMovies',
  async (page?: number) => {
    const movies = await gettopRatedMovies(page);
    return movies;
  },
);
