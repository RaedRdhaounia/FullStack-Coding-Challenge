// ==============================|| HomeScreen module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native components imports
import {Button, View} from 'react-native';

//-- components imports
import {TextInputGen} from '../components/generator/';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//-- types imports
import {
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
} from 'constants/types/Tscreens';

// ==============================|| HomeScreen component ||============================== //

//-------- locat component interface
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

/**
 * main screen get list of movies ( by Top rated ) with search input query
 * @name HomeScreen
 * @returns React.FC
 * @example
 * <HomeScreen/>
 */
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  // --- local state
  const [text, onChangeText] = React.useState('');

  //-------- function methodes
  // --- navigation to Details function navigator
  const handleNavigate = () => {
    navigation.navigate('Details', {itemId: 1});
  };
  // --- handlechange text
  const handleChangeText = (_text: string) => {
    onChangeText(_text);
  };

  //-------- render component
  return (
    <SafeAreaWrapper>
      <View>
        <TextInputGen onChangeText={handleChangeText} value={text} />
        <Button title="Go to Details" onPress={handleNavigate} />
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
