// ==============================|| Splash module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native components imports
import {View, Image, StyleSheet} from 'react-native';

//-- background image source imports
const localImage = require('../../../assets/splash.png');

// ==============================|| Splash component ||============================== //

/**
 *
 * @name Splash
 * @description when getting loading case ( fetching data and waiting ) we display this component to the user
 * @returns {JSX.Element}
 * @example <Splash/>
 */
const Splash = (): JSX.Element => {
  return (
    <View>
      <Image source={localImage} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default Splash;

// ==============================|| styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
