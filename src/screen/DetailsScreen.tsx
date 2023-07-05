import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "constants/types/Tscreens";
import { SafeAreaView, Text } from "react-native";


interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { itemId } = route.params;

  return (
    <SafeAreaView>
      <Text>Item ID: {itemId}</Text>
    </SafeAreaView>
  );
};

export default DetailsScreen