import React from 'react';
import { View, Text } from 'react-native';
import { FavouritesScreenNavigationProp, FavouritesScreenRouteProp } from '../constants/types/Tscreens';

interface FavouritesScreenProps {
  navigation: FavouritesScreenNavigationProp;
  route: FavouritesScreenRouteProp;
}

const FavouritesScreen: React.FC<FavouritesScreenProps> = () => {
  return (
    <View>
      <Text>Favourites Screen</Text>
    </View>
  );
};

export default FavouritesScreen;