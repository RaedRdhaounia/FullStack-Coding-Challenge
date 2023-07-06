// ==============================|| DetailsScreen module ||============================== //

// ==============================|| IMPORTS

import React from "react";

//-- native components imports
import { Text } from "react-native";

//-- screen styles component imports
import { SafeAreaWrapper } from "./SafeAreaWrapper";

//-- types imports
import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "constants/types/Tscreens";


// ==============================|| DetailsScreen component ||============================== //

//-------- locat component interface
interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

/**
 * component to see a single movie details
 * @name DetailsScreen
 * @returns React.FC
 * @example
 * <DetailsScreen/> 
 */
const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  // --- destraction params
  const { itemId } = route.params;

  //-------- render component
  return (
    <SafeAreaWrapper>
      <Text>Item ID: {itemId}</Text>
    </SafeAreaWrapper>
  );
};

export default DetailsScreen