import React from 'react';
import { Text } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { AddToFavouriteIcon, BackIcon, FavouriteIcon } from '../components/others/Icons';

type optionT = {
  stack: NativeStackNavigationOptions;
  home: NativeStackNavigationOptions;
  details: NativeStackNavigationOptions;
  favourites: NativeStackNavigationOptions;
};

export default () => {

  const header = {
    headerTitleAlign: 'center',
    headerTransparent: true,
    headerTitle: ({ children }: { children: string }) => <Text>{children}</Text>,
  } as StackHeaderOptions;

  const options = {
    stack: header,
    home: {
      ...header,
      headerTitle: () => null,
      headerRight: ()=> <FavouriteIcon/>,
      headerLeft: () => null,
    },
    details: {
      ...header,
      headerTitle: () => null,
      headerRight: ()=> <AddToFavouriteIcon/>,
      headerLeft: () => <BackIcon color='gray'/>,

    },
    favourites: {
      ...header,
      headerTitle: null,
      headerRight: () => null,
      headerLeft: () => <BackIcon color='white'/>,

    },
  };

  return options as unknown as optionT;
};
