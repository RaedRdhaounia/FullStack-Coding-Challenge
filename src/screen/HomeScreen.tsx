import { HomeScreenNavigationProp, HomeScreenRouteProp } from "constants/types/Tscreens";
import { Button, SafeAreaView } from "react-native";

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const  HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) =>  {

  // item id will be change just for now placing as constant
  const handleNavigate = () => { navigation.navigate('Details', {itemId: 1}) };
  return (
    <SafeAreaView>
      <Button title="Go to Details" onPress={handleNavigate} />
    </SafeAreaView>
  );
};

export default HomeScreen