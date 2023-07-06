// ==============================|| AppNavigator module ||============================== //

// ==============================|| IMPORTS
import React from 'react';
//-- container navigation imports
import {NavigationContainer} from '@react-navigation/native';

//-- Stack screen imports
import Screens from './Screens';

// ==============================|| AppNavigator component||============================== //
/**
 * manages our navigation tree
 * @name: AppNavigator
 * @returns React.FC.
 * @example
 * <AppNavigator/>
 */

const AppNavigator: React.FC = () => (
  <NavigationContainer children={<Screens />} />
);

export default AppNavigator;
