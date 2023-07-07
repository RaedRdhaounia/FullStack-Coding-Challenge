// ==============================|| FavouritesScreen module ||============================== //

// ==============================|| IMPORTS

import React, {useState} from 'react';

//-- native components imports
import {FlatList, StyleSheet, Text, View} from 'react-native';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//-- types imports
import {
  FavouritesScreenNavigationProp,
  FavouritesScreenRouteProp,
} from '../constants/types/Tscreens';
import {useSelector} from 'react-redux';
import {MovieDetails} from '../constants/types/reduxState';
import {RenderCard} from '../components/others/favouriteScreenCard/RenderdCard';

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
  const [movie, setMovie] = useState<MovieDetails[]>(favorites);
  //-------- render component
  return (
    <SafeAreaWrapper>
      <FlatList
        data={movie}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={RenderCard}
        contentContainerStyle={styles.container}
      />
    </SafeAreaWrapper>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
