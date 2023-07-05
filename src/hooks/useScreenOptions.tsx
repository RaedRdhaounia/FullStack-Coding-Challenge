import React from 'react';
import { Text } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HomeScreenNavigationProp } from 'constants/types/Tscreens';
import { AddToFavouriteIcon, FavouriteIcon } from '../components/others/Icons';

type optionT = {
  stack: NativeStackNavigationOptions;
  home: NativeStackNavigationOptions;
  details: NativeStackNavigationOptions;
  favourites: NativeStackNavigationOptions;
};

export default () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

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
      headerRight: FavouriteIcon,
      headerLeft: () => null,
    },
    details: {
      ...header,
      headerTitle: () => <Text>favourite</Text>,
      headerRight: AddToFavouriteIcon,
    },
    favourites: {
      ...header,
      headerTitle: () => <Text>favourite</Text>,
      headerRight: () => null,
    },
  };

  return options as optionT;
};
