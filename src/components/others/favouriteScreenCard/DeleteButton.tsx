// ==============================|| DeleteFromFavoriteIcon module ||============================== //

// ==============================|| IMPORTS

import React, {useContext} from 'react';

//-- icon components imports
import {MaterialIcons} from '@expo/vector-icons';

import {Alert, ToastAndroid} from 'react-native';
import {FavoritesMoviesContext} from '../../../hooks/StorageContext';

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
  const {removeFromFavorites} = useContext(FavoritesMoviesContext);
  //-------- navigation components config
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
    await removeFromFavorites(itemId);
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
