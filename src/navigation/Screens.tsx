import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen, FavouritesScreens, HomeScreen} from '../screen';
import { RootStackParamList } from 'constants/types/Tscreens';
import { useScreenOptions } from '../hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default () => {
  const screenOptions = useScreenOptions();
  const {details, favourites, home, stack} = screenOptions
  return (
    <Stack.Navigator screenOptions={stack} >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={home}

      />
    <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={details}

      />
            <Stack.Screen
        name="Favourites"
        component={FavouritesScreens}
        options={favourites}

      />
    </Stack.Navigator>
  );
};