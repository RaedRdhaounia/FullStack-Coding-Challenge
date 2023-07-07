// ==============================|| Icons module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native components imports
import {StyleSheet, Text, View} from 'react-native';

//-- react native navigation imports
import {useNavigation, useRoute} from '@react-navigation/native';

//-- icon component
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

//-- types imports
import {
  DetailsScreenRouteProp,
  HomeScreenNavigationProp,
} from 'constants/types/Tscreens';
import {addToFavorites} from '../../redux/favoriteMoviesListSlice';
import {getMovieById} from '../../api/generator/methodes';
import {useDispatch, useSelector} from 'react-redux';

//-- local props types
type BackIconP = {
  color: string;
};

// ==============================|| Favorite movie list icon||============================== //
/**
 * @name: FavoriteIcon
 * @Iconfamily : MaterialCommunityIcons
 * @props none
 * @returns JSX.Element.
 * @example
 * <FavoriteIcon/>
 */

export function FavoriteIcon() {
  //-------- navigation components config
  // --- instance navigation methods
  const navigation = useNavigation<HomeScreenNavigationProp>();
  // --- navigation to Favorites function
  function handleNavigationFavorites() {
    navigation.navigate('Favourites');
  }

  //-------- render component
  return (
    <MaterialCommunityIcons
      name="heart-multiple"
      size={24}
      color="red"
      onPress={handleNavigationFavorites}
    />
  );
}

// ==============================|| Add movie to favorite list icon||============================== //
/**
 * @name: AddToFavoriteIcon
 * @Iconfamily : MaterialCommunityIcons
 * @props none
 * @returns JSX.Element.
 * @example
 * <AddToFavoriteIcon/>
 */

export function AddToFavoriteIcon() {
  //-------- navigation components config
  // --- instance route methods
  const route = useRoute<DetailsScreenRouteProp>();
  // --- destruction params
  const {itemId} = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  // --- dispatch params
  async function addToFavorite() {
    const result = await getMovieById(1, itemId.toString());
    dispatch(addToFavorites(result));
  }
  //-------- render component
  if (!favorites.some((fav) => fav.id === itemId)) {
    return (
      <MaterialCommunityIcons
        name="heart-plus"
        size={24}
        color="black"
        onPress={addToFavorite}
      />
    );
  }
  return null;
}

// ==============================|| custom back button icon||============================== //
/**
 * BackIcon : vector-icons
 *
 * @param props
 * @props color : string - backgroundcolor of the back button.
 * @returns JSX.Element.
 * @example
 * <BackIcon color='red' />
 */

export function BackIcon(props: BackIconP) {
  //-------- destruction props
  const {color} = props;

  //-------- navigation components config
  // --- instance route methods
  const navigation = useNavigation<HomeScreenNavigationProp>();
  // --- back to pervious screen (default home screen)
  function handleNavigationFavorites() {
    navigation.goBack();
  }

  //-------- render component
  return (
    <View style={{...styles.iconBack, backgroundColor: color}}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        onPress={handleNavigationFavorites}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconBack: {
    padding: 5,
    borderRadius: 25,
  },
});
