// ==============================|| Icons module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native components imports
import {Alert, StyleSheet, ToastAndroid, View} from 'react-native';

//-- react native navigation imports
import {useNavigation, useRoute} from '@react-navigation/native';

//-- icon component
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

//-- types imports
import {
  DetailsScreenRouteProp,
  HomeScreenNavigationProp,
  Movie,
  MovieDetails,
} from 'constants/';

//-- api Promise import
import {getMovieById} from '../../api/generator/methodes';

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

export function AddToFavoriteIcon(props: {
  addToFavorites: (movie: Movie) => void;
  favorites: Movie[];
}) {
  const {addToFavorites, favorites} = props;
  //-------- navigation components config
  // --- instance route methods
  const route = useRoute<DetailsScreenRouteProp>();
  // --- destruction params
  const {itemId} = route.params;
  // --- dispatch params
  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Your movie added with success',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50,
    );
  };
  async function addToFavorite() {
    const result = (await getMovieById(1, itemId.toString())) as Movie;
    addToFavorites(result);
    await showToast();
  }
  //-------- render component
  if (!favorites.some((fav: MovieDetails) => fav.id === itemId)) {
    const addToFavoriteAlert = () => {
      Alert.alert(
        'Add a movie to your favorite list',
        'Do you like to add this movie to your favorite list ?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Confirm', onPress: async () => await addToFavorite()},
        ],
      );
    };
    return (
      <MaterialCommunityIcons
        name="heart-plus"
        size={24}
        color="black"
        onPress={addToFavoriteAlert}
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
 * @props color : string - backgroundColor of the back button.
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
// ==============================|| styles

const styles = StyleSheet.create({
  iconBack: {
    padding: 5,
    borderRadius: 25,
  },
});
