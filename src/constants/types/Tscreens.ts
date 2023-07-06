import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Favourites: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export type FavouritesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Favourites'>;
export type FavouritesScreenRouteProp = RouteProp<RootStackParamList, 'Favourites'>;