// ==============================|| DeleteFromFavoriteIcon module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- icon components imports
import {MaterialIcons} from '@expo/vector-icons';

// - redux imports actions and methods
import {removeFromFavorites} from '../../../redux/favoriteMoviesListSlice';
import {useDispatch} from 'react-redux';
import {Alert, ToastAndroid} from 'react-native';

// ==============================|| Add movie to favorite list icon||============================== //
/**
 * @name: DeleteFromFavoriteIcon
 * @Iconfamily : MaterialCommunityIcons
 * @props none
 * @returns JSX.Element.
 * @example
 * <DeleteFromFavoriteIcon/>
 */
export function DeleteFromFavoriteIcon({itemId}: {itemId: number}) {
  //-------- navigation components config
  // --- destruction params
  const dispatch = useDispatch();
  // --- dispatch params
  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Your movie removed with success',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50,
    );
  };
  async function handleRemove() {
    await dispatch(removeFromFavorites(itemId));
    await showToast();
  }
  const addToFavoriteAlert = () => {
    Alert.alert(
      'delete a movie from your favorite list',
      'Do you like to remove this movie from your favorite list ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Confirm', onPress: async () => await handleRemove()},
      ],
    );
  };
  //-------- render component
  return (
    <MaterialIcons
      name="remove-circle"
      size={28}
      color="red"
      onPress={addToFavoriteAlert}
    />
  );
}
