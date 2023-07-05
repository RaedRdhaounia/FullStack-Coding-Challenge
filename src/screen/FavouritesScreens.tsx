import React from 'react';
import { Text } from 'react-native';
import { FavouritesScreenNavigationProp, FavouritesScreenRouteProp } from '../constants/types/Tscreens';
import { SafeAreaWrapper } from './SafeAreaWrapper';

interface FavouritesScreenProps {
  navigation: FavouritesScreenNavigationProp;
  route: FavouritesScreenRouteProp;
}

const FavouritesScreen: React.FC<FavouritesScreenProps> = () => {
  return (
    <SafeAreaWrapper>
      <Text>Favourites Screen</Text>
    </SafeAreaWrapper>
  );
};

export default FavouritesScreen;