import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { FavouritesScreenNavigationProp, FavouritesScreenRouteProp } from '../constants/types/Tscreens';

interface FavouritesScreenProps {
  navigation: FavouritesScreenNavigationProp;
  route: FavouritesScreenRouteProp;
}

const FavouritesScreen: React.FC<FavouritesScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>Favourites Screen</Text>
    </SafeAreaView>
  );
};

export default FavouritesScreen;