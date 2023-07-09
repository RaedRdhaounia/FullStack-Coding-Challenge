import {
  DetailsScreenNavigationProp,
  DetailsScreenRouteProp,
  FavouritesScreenNavigationProp,
  FavouritesScreenRouteProp,
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
} from './Tscreens';

export interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

export interface FavouritesScreenProps {
  navigation: FavouritesScreenNavigationProp;
  route: FavouritesScreenRouteProp;
}

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}
