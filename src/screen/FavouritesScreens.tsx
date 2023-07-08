// ==============================|| FavouritesScreen module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//-- types imports
import {
  FavouritesScreenNavigationProp,
  FavouritesScreenRouteProp,
} from '../constants/types/Tscreens';
import {useSelector} from 'react-redux';
import {AnimatedFlatList} from '../components/others/favouriteScreenCard/AnimatedFlatList';

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
  const favorites = useSelector((state) => state.movies.favorites);
  //-------- render component
  return (
    <SafeAreaWrapper>
      {favorites && <AnimatedFlatList data={favorites} />}
    </SafeAreaWrapper>
  );
};

export default FavouritesScreen;
