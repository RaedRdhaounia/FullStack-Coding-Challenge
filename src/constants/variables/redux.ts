import {MoviesState} from 'constants/types/reduxState';

//-------- initialized state
export const initialState: MoviesState = {
  favorites: [],
  topRated: [],
  currentPage: 1,
  totalPages: 0,
  loading: 'idle',
  error: null,
};
