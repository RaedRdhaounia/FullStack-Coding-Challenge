import React from "react";
import { useNavigation            } from "@react-navigation/native";
import { MaterialCommunityIcons   } from "@expo/vector-icons"      ;
import { HomeScreenNavigationProp } from "constants/types/Tscreens";


export function FavouriteIcon() {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  function handleNavigationFavourites() {
    navigation.navigate('Favourites')
  }
  return (
    <MaterialCommunityIcons name="heart-multiple" size={24} color="red" onPress={handleNavigationFavourites}/>
  )
}

export function AddToFavouriteIcon() {
  function addToFavourite() {
    console.log("add to favourite")
  }
  return (
    <MaterialCommunityIcons name="heart-plus" size={24} color="black"onPress={addToFavourite} />
  )
}