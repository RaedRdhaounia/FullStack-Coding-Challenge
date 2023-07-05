import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen, FavouritesScreens, HomeScreen} from '../screen';
import { RootStackParamList } from 'constants/types/Tscreens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => {

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
    <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />
            <Stack.Screen
        name="Favourites"
        component={FavouritesScreens}
      />
    </Stack.Navigator>
  );
};