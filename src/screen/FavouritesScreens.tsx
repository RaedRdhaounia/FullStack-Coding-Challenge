// ==============================|| FavouritesScreen module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native components imports
import { Text } from 'react-native';

//-- screen styles component imports
import { SafeAreaWrapper } from './SafeAreaWrapper';

//-- types imports
import { FavouritesScreenNavigationProp, FavouritesScreenRouteProp } from '../constants/types/Tscreens';


// ==============================|| HomeScreen component ||============================== //

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

  //-------- render component
  return (
    <SafeAreaWrapper>
      <Text>Favourites Screen</Text>
    </SafeAreaWrapper>
  );
};

export default FavouritesScreen;