// ==============================|| DeleteFromFavoriteIcon module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- icon components imports
import {MaterialIcons} from '@expo/vector-icons';

// - redux imports actions and methods
import {removeFromFavorites} from '../../../redux/favoriteMoviesListSlice';
import {useDispatch} from 'react-redux';

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
  async function handleRemove() {
    dispatch(removeFromFavorites(itemId));
  }
  //-------- render component
  return (
    <MaterialIcons
      name="remove-circle"
      size={24}
      color="red"
      onPress={handleRemove}
    />
  );
}
