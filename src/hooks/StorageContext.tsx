// ==============================|| Storage Context module ||============================== //

// ==============================|| IMPORTS

import React, {createContext, useState, useEffect, ReactNode} from 'react';

//-- import LocalStorage dataStore provider as AsyncStorageStatic
import AsyncStorage from '@react-native-async-storage/async-storage';

//-- import FavoriteMovie type
import {Movie} from '../constants/';
import {Alert} from 'react-native';
import {FavoritesMovieContextValue} from '../constants/';

// ==============================|| Favorite Movies Context ||============================== //

export const FavoritesMoviesContext = createContext<FavoritesMovieContextValue>(
  {
    favorites: [],
    addToFavorites: () => {},
    removeFromFavorites: () => {},
  },
);

// ==============================|| Favorite Movies Provider ||============================== //

export const FavoritesProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  // ==========    contextValue

  //-- favorite context
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Add a movie to favorites
  const addToFavorites = (movie: Movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  // Remove a movie from favorites
  const removeFromFavorites = (movieId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId),
    );
  };

  // ==========    favorite context controllers

  // first render component dispatch favorites list
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoritesData = await AsyncStorage.getItem('favorites');
        if (favoritesData) {
          const parsedFavorites = JSON.parse(favoritesData);
          setFavorites(parsedFavorites);
        }
      } catch (error) {
        Alert.alert('Oops', 'Somethings was wrong');
      }
    };

    loadFavorites();
  }, []);

  // case favorites change update Storage
  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      } catch (error) {
        Alert.alert('Oops', 'Somethings was wrong');
      }
    };

    saveFavorites();
  }, [favorites]);

  // ==========    collect the context value

  const contextValue: FavoritesMovieContextValue = {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  // Render the provider with the context value
  return (
    <FavoritesMoviesContext.Provider value={contextValue}>
      {children}
    </FavoritesMoviesContext.Provider>
  );
};
