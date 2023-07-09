import {MoviesState} from 'constants/types/reduxState';

//-------- initialized state
export const initialState: MoviesState = {
  topRated: [],
  loading: 'idle',
  error: null,
};
