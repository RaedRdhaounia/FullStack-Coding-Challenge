import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "constants/types/Tscreens";
import { Text, View } from "react-native";


interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { itemId } = route.params;

  return (
    <View>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

export default DetailsScreen