import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from "./Screens"

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
        <Screens/>
    </NavigationContainer>
  );
};

export default AppNavigator;