import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "constants/types/Tscreens";
import { Text } from "react-native";
import { SafeAreaWrapper } from "./SafeAreaWrapper";


interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { itemId } = route.params;

  return (
    <SafeAreaWrapper>
      <Text>Item ID: {itemId}</Text>
    </SafeAreaWrapper>
  );
};

export default DetailsScreen