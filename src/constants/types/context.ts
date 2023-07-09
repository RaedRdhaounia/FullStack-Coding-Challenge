import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Movie} from './reduxState';

// Define the shape of the context value
export type FavoritesMovieContextValue = {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
};

export type optionT = {
  stack: NativeStackNavigationOptions;
  home: NativeStackNavigationOptions;
  details: NativeStackNavigationOptions;
  favourites: NativeStackNavigationOptions;
};
