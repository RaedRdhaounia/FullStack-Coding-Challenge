// ==============================|| SafeAreaWrapper module ||============================== //

// ==============================|| IMPORTS

import React from 'react';
//-- native components imports
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import backgroundImage from '../assets/images/background.jpg';
//-- react native navigation imports
import {useHeaderHeight} from '@react-navigation/elements';

// ==============================|| SafeAreaWrapper component ||============================== //
/**
 * As the header bar style transparent we need to made a paading top for each screen as separator height --
 * To manages global screens styles
 * @name: SafeAreaWrapper
 * @prop {children} : React.ReactElement
 * @prop {backgroundColor} : string default is white
 * @param {props} props
 * @returns JSX.Element
 * @example
 * <SafeAreaWrapper children={<Screen/>} color="gray"/>
 */
export const SafeAreaWrapper = ({
  children,
  backgroundColor,
}: {
  children: React.ReactElement;
  backgroundColor?: string;
}) => {
  //-------- getter header bar Height
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView
      style={{
        ...styles.SafeAreaView,
        paddingTop: headerHeight,
        backgroundColor,
      }}>
      <StatusBar animated backgroundColor="#999ED7" />
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  backgroundImage: {
    flex: 1,
    resizeMode: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
