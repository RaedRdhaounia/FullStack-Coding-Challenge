import React, {useEffect, useRef} from 'react';

import {MovieDetails} from '../../../constants/';
import {Animated, StyleSheet} from 'react-native';
import RenderCard from './RenderdCard';
import {useNavigation} from '@react-navigation/native';

const AnimatedFlatList = ({data}: {data: MovieDetails[]}) => {
  const navigation = useNavigation();

  const animatedValues = useRef(data.map(() => new Animated.Value(0))).current;
  useEffect(() => {
    const animationTimers = data.map((item, index) => {
      return setTimeout(() => {
        Animated.timing(animatedValues[index], {
          toValue: 0.7,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }, index * 1000);
    });

    return () => {
      animationTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [animatedValues, data]);

  const renderItem = ({item, index}: {item: MovieDetails; index: number}) => {
    return (
      <RenderCard
        item={item}
        navigation={navigation}
        animatedValue={animatedValues[index]}
      />
    );
  };

  return (
    <Animated.FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

export default AnimatedFlatList;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
