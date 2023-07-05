import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons  } from "@expo/vector-icons"      ;
import { DetailsScreenRouteProp, HomeScreenNavigationProp } from "constants/types/Tscreens";
import { StyleSheet, View } from "react-native";


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
  const route =useRoute<DetailsScreenRouteProp>()
  const {itemId} = route.params
  function addToFavourite() {
      console.log("add to favourite", itemId)
  }
  return (
    <MaterialCommunityIcons name="heart-plus" size={24} color="black"onPress={addToFavourite} />
  )
}

export function BackIcon(props: {color: string}) {
  const {color}= props
  const navigation = useNavigation<HomeScreenNavigationProp>()
  function handleNavigationFavourites() { navigation.goBack() }
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
