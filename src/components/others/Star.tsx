import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import {StyleSheet} from 'react-native';

const StarIcons = (rating: number) => {
  const filledStarColor = 'gold';
  const emptyStarColor = 'gray';

  const stars = [];
  for (let i = 1; i <= 10; i++) {
    const iconName = i <= rating ? 'star' : 'staro';
    const starColor = i <= rating ? filledStarColor : emptyStarColor;
    stars.push(
      <AntDesign
        name={iconName}
        size={24}
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
