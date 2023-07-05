import { HomeScreenNavigationProp, HomeScreenRouteProp } from "constants/types/Tscreens";
import { Button, View } from "react-native";

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const  HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) =>  {

  // item id will be change just for now placing as constant
  const handleNavigate = () => { navigation.navigate('Details', {itemId: 1}) };
  return (
    <View>
      <Button title="Go to Details" onPress={handleNavigate} />
    </View>
  );
};

export default HomeScreen