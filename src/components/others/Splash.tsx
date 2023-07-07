import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
const localImage = require('../../../assets/splash.png');

const Splash = () => {
  return (
    <View>
      <Image source={localImage} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default Splash;

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
