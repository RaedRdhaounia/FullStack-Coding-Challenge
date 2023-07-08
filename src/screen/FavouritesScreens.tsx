// ==============================|| FavouritesScreen module ||============================== //

// ==============================|| IMPORTS

import React, {useContext} from 'react';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//-- types imports
import {
  FavouritesScreenNavigationProp,
  FavouritesScreenRouteProp,
} from '../constants/';
import {AnimatedFlatList} from '../components/others/';
import {useFocusEffect} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {getRandomColor} from '../utils/';
import {FavoritesMoviesContext} from '../hooks/';

// ==============================|| FavouritesScreen component ||============================== //

//-------- locat component interface
interface FavouritesScreenProps {
  navigation: FavouritesScreenNavigationProp;
  route: FavouritesScreenRouteProp;
}

/**
 * this component will show the added list of movies to the favourite list
 * @name FavouritesScreen
 * @returns React.FC
 * @example
 * <FavouritesScreen/>
 */
const FavouritesScreen: React.FC<FavouritesScreenProps> = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(getRandomColor(), false);
  });
  const {favorites} = useContext(FavoritesMoviesContext);
  //-------- render component
  return (
    <SafeAreaWrapper>
      {favorites && <AnimatedFlatList data={favorites} />}
    </SafeAreaWrapper>
  );
};

export default FavouritesScreen;
