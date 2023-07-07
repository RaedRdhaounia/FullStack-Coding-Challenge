import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import {StyleSheet} from 'react-native';

const StarIcons = (rating: number) => {
  const filledStarColor = 'yellow';
  const emptyStarColor = 'white';
  const stars = [];
  for (let i = 1; i <= 10; i++) {
    const iconName = i > rating / 10 ? 'star' : 'staro';
    const starColor = i > rating / 10 ? filledStarColor : emptyStarColor;
    stars.push(
      <AntDesign
        name={iconName}
        size={8}
        color={starColor}
        style={styles.iconStar}
      />,
    );
  }

  return stars;
};
export default StarIcons;

const styles = StyleSheet.create({
  iconStar: {
    marginRight: 4,
  },
});
