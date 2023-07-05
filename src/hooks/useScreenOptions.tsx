import React from 'react';
import { Text } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HomeScreenNavigationProp } from 'constants/types/Tscreens';

type optionT = {
  stack: NativeStackNavigationOptions;
  home: NativeStackNavigationOptions;
  details: NativeStackNavigationOptions;
  favourites: NativeStackNavigationOptions;
};

export default () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

  const header = {
    headerStyle: { backgroundColor: 'transparent' },
    headerTitleAlign: 'center',
    headerTitleContainerStyle: { marginLeft: 0 },
    headerLeftContainerStyle: { paddingLeft: 0 },
    headerRightContainerStyle: { paddingRight: 0 },
    headerTitle: ({ children }: { children: string }) => <Text>{children}</Text>,
  } as StackHeaderOptions;

  const options = {
    stack: header,
    home: {
      ...header,
      headerTitle: () => null,
      headerRight: () => (
        <Text onPress={() => navigation.navigate('Favourites')}>favourite</Text>
      ),
      headerLeft: () => null,
    },
    details: {
      ...header,
      headerTitle: () => null,
      headerRight: () => (
        <Text onPress={() => console.log('dispatch add to favourites')}>favourite +</Text>
      ),
      headerLeft: () => (
        <Text onPress={() => navigation.goBack()}>{'<-'}</Text>
      ),
    },
    favourites: {
      ...header,
      headerTitle: () => <Text>favourite</Text>,
      headerRight: () => null,
      headerLeft: () => null,
    },
  };

  return options as optionT;
};
