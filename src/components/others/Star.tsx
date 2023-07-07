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
 * @name StarIcons
 * @returns {JSX.Element[]}
 * @example
 * <View> {StarIcons(rating)} </View>
 */
const StarIcons = (rating: number): JSX.Element[] => {
  //-- colors declaration
  const filledStarColor = 'yellow';
  const emptyStarColor = 'white';

  //-- init stars
  const stars = [];

  //-- add stars with conditions styles to the starts array
  for (let i = 1; i <= 10; i++) {
    const iconName = i > rating ? 'star' : 'staro';
    const starColor = i > rating ? filledStarColor : emptyStarColor;
    stars.push(
      <AntDesign
        name={iconName}
        size={8}
        color={starColor}
        style={styles.iconStar}
      />,
    );
  }
  // -- return JSX.Element[]
  return stars;
};
export default StarIcons;

const styles = StyleSheet.create({
  iconStar: {
    marginRight: 4,
  },
});
