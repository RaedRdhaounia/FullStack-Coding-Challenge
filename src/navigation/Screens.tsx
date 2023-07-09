// ==============================|| Screens Stack module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- react native navigation imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//-- NativeStackNavigationOptions imports
import {useScreenOptions} from '../hooks';

//-- screens imports
import {DetailsScreen, FavouritesScreens, HomeScreen} from '../screen';

//-- types imports
import {RootStackParamList} from 'constants/';

//-- instance Navigator Root stack imports

const Stack = createNativeStackNavigator<RootStackParamList>();

// ==============================|| stack screen component||============================== //
/**
 * Screens component that configures the stack navigator and screen options.
 * It renders the Home, Details, and Favorites screens.
 * @name: Screens
 * @returns JSX.Element
 * @example
 * <Stack.Navigator >
 *   <Stack.Screen name="ScreenName" component={ScreenComponent}/>
 * ...
 * </Stack.Navigator>
 */

export default function Screens(): JSX.Element {
  //-------- screens header options
  //-- instance useScreenOptions : getter options
  const screenOptions = useScreenOptions();
  // --- destruction options screens
  const {details, favourites, home, stack} = screenOptions;

  //-------- render component
  return (
    <Stack.Navigator screenOptions={stack}>
      <Stack.Screen name="Home" component={HomeScreen} options={home} />
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
}
