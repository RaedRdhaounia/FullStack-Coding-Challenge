import React from 'react';
import {Text} from 'react-native';

import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation()
  const header = {
    headerStyle: {elevation: 0, backgroundColor :"transparent"},
    headerTitleAlign: 'left',
    headerTitleContainerStyle: {marginLeft: 0},
    headerLeftContainerStyle: {paddingLeft: 0},
    headerRightContainerStyle: {paddingRight: 0},
    headerTitle: ({children}: {children : string}) => (
      <Text>{children}</Text>
    ),
  } as StackHeaderOptions;

  const options = {
    stack: header,
    home: {
      ...header,
      headerTitle: () => null,
      headerRight: () => <Text onPress={() => navigation.navigate('Favourites')}> favourite</Text>,
      headerLeft: () => null
    },
    details : {
        ...header,
        headerTitle: () => null,
        headerRight: () => <Text onPress={() => console.log("dispatch add to favourites")}> favourite + </Text>,
        headerLeft: () => <Text onPress={() => navigation.goBack()}> back </Text>
      },
      favourites : {
        ...header,
        headerTitle: () => <Text> favourite + </Text>,
        headerRight: () => null,
        headerLeft: () => <Text onPress={() => navigation.goBack()}> back </Text>
      },
  };

  return options;
};