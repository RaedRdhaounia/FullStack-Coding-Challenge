// ==============================|| FavouritesScreen module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native components imports
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
//-types
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';

//-- components imports
//- native components imports
import {Text} from 'react-native';
//- generators components imports
import {
  AddToFavouriteIcon,
  BackIcon,
  FavoriteIcon,
} from '../components/generator';

// ==============================|| useScreenOptions function ||============================== //

//-------- locat options stack type
type optionT = {
  stack: NativeStackNavigationOptions;
  home: NativeStackNavigationOptions;
  details: NativeStackNavigationOptions;
  favourites: NativeStackNavigationOptions;
};

/**
 * @description we use this function for managment options header bar for screens stack
 * @name useScreenOptions
 * @returns {options} : optionT
 * @example
 * const screenOption = useScreenOptions()
 * <Stack.Screen
 *   name="Home"
 *   component={HomeScreen}
 *   options={screenOption.home}
 * />
 */
export default function useScreenOptions(): optionT {
  //-------- based header bar styles component
  const header = {
    headerTitleAlign: 'center',
    headerTransparent: true,
    headerTitle: ({children}: {children: string}) => <Text>{children}</Text>,
  } as StackHeaderOptions;

  //-------- returned function build based on spread operator syntax
  const options = {
    stack: header,
    home: {
      ...header,
      headerTitle: () => null,
      headerRight: () => <FavoriteIcon />,
      headerLeft: () => null,
    },
    details: {
      ...header,
      headerTitle: () => null,
      headerRight: () => <AddToFavouriteIcon />,
      headerLeft: () => <BackIcon color="white" />,
    },
    favourites: {
      ...header,
      headerTitle: null,
      headerRight: () => null,
      headerLeft: () => <BackIcon color="gray" />,
    },
  };

  //-------- function returns
  return options as unknown as optionT;
}
