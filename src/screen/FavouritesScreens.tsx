// ==============================|| FavouritesScreen module ||============================== //

// ==============================|| IMPORTS

import React, {useContext} from 'react';

//-- hooks imports
import {FavoritesMoviesContext} from '../hooks/';

//-- native components imports
import {StatusBar} from 'react-native';

//-- native hooks imports
import {useFocusEffect} from '@react-navigation/native';

//-- animated components imports
import {AnimatedFlatList} from '../components/others/';
//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//-- types imports
import {FavouritesScreenProps} from '../constants/';

//--  util function imports
import {getRandomColor} from '../utils/';

// ==============================|| FavouritesScreen component ||============================== //

/**
 * this component will show the added list of movies to the favorite list
 * @name FavouritesScreen
 * @returns React.FC
 * @example
 * <FavouritesScreen/>
 */
const FavouritesScreen: React.FC<FavouritesScreenProps> = () => {
  //--------change status bar color on navigator to screen
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
