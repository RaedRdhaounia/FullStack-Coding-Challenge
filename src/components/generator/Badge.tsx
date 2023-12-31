// ==============================|| Badge module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native components imports
import {View, Text, StyleSheet} from 'react-native';

//-- types imports
import {Genre} from '../../constants/';
import {getRandomColor} from '../../utils/';

// ==============================|| Badge component ||============================== //

const Badge = ({name}: Genre) => {
  //-------- render component
  return (
    <View style={{...styles.container, backgroundColor: getRandomColor()}}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Badge;

// ==============================|| styles

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  id: {
    fontSize: 14,
    marginRight: 8,
  },
  name: {
    fontSize: 14,
  },
});
