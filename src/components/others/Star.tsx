// ==============================|| StarIcons module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native components imports
import {StyleSheet} from 'react-native';

//-- icons component imports
import {AntDesign} from '@expo/vector-icons';

// ==============================|| StarIcons components ||============================== //

/**
 *
 * @name StarIcon
 * @description icons component for a star icon
 * @fontfamily AntDesign
 * @field {size: 16,  color: "yellow", name: "star"}
 * @returns {JSX.Element}
 * @example <StarIcon/>
 */
const StarIcon = (): JSX.Element => {
  return (
    <AntDesign
      name={'star'}
      size={16}
      color={'yellow'}
      style={styles.iconStar}
    />
  );
};
export default StarIcon;

// ==============================|| styles

const styles = StyleSheet.create({
  iconStar: {
    marginRight: 4,
  },
});
