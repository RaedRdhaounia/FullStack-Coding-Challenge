// ==============================|| Icons module ||============================== //

// ==============================|| IMPORTS

import React from "react";

//-- native components imports
import { StyleSheet, View } from "react-native";

//-- react native navigation imports
import { useNavigation, useRoute } from "@react-navigation/native";

//-- icon componenet
import { Ionicons, MaterialCommunityIcons  } from "@expo/vector-icons";

//-- types imports
import { DetailsScreenRouteProp, HomeScreenNavigationProp } from "constants/types/Tscreens";

//-- local props types
type BackIconP = {
  color: string
}


// ==============================|| Favorite movie list icon||============================== //
/**
 * @name: FavouriteIcon
 * @Iconfamily : MaterialCommunityIcons
 * @props none 
 * @returns {JSX.Element} JSX.Element.
 * @example
 * <FavouriteIcon/> 
 */

export function FavouriteIcon() {

//-------- navigation components config
// --- instance navigation methode
  const navigation = useNavigation<HomeScreenNavigationProp>()
// --- navigation to Favourites function
  function handleNavigationFavourites() { navigation.navigate('Favourites') }

//-------- render component
  return (
    <MaterialCommunityIcons name="heart-multiple" size={24} color="red" onPress={handleNavigationFavourites}/>
  )
}


// ==============================|| Add movie to favourite list icon||============================== //
/**
 * @name: AddToFavouriteIcon
 * @Iconfamily : MaterialCommunityIcons
 * @props none 
 * @returns {JSX.Element} JSX.Element.
 * @example
 * <AddToFavouriteIcon/> 
 */

export function AddToFavouriteIcon() {
//-------- navigation components config
// --- instance route methode
  const route =useRoute<DetailsScreenRouteProp>()
// --- destraction params
  const {itemId} = route.params
// --- dispatch params
  function addToFavourite() { console.log("add to favourite", itemId) }

//-------- render component
  return (
    <MaterialCommunityIcons name="heart-plus" size={24} color="black"onPress={addToFavourite} />
  )
}

// ==============================|| custum back button icon||============================== //
/**
 * BackIcon : vector-icons
 * 
 * @param props 
 * @props color : string - backgroundcolor of the back button.
 * @returns {JSX.Element} JSX.Element.
 * @example
 * <BackIcon color='red' /> 
 */

export function BackIcon(props: BackIconP) {

//-------- destraction props
  const {color}= props

//-------- navigation components config
// --- instance route methode
  const navigation = useNavigation<HomeScreenNavigationProp>()
// --- back to pervious screen (default home screen)
  function handleNavigationFavourites() { navigation.goBack() }

//-------- render component
  return (
    <View style={{...styles.iconBack, backgroundColor: color}} >
    <Ionicons  name="arrow-back" size={24} color="black" onPress={handleNavigationFavourites} />
    </View>
  )
}

const styles = StyleSheet.create({
  iconBack: {
    padding: 5,
    borderRadius: 25,  
  }
});
