import { HomeScreenNavigationProp, HomeScreenRouteProp } from "constants/types/Tscreens";
import { Button } from "react-native";
import { SafeAreaWrapper } from "./SafeAreaWrapper";

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const  HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) =>  {

  // item id will be change just for now placing as constant
  const handleNavigate = () => { navigation.navigate('Details', {itemId: 1}) };
  return (
    <SafeAreaWrapper>
      <Button title="Go to Details" onPress={handleNavigate} />
    </SafeAreaWrapper>
  );
};

export default HomeScreen