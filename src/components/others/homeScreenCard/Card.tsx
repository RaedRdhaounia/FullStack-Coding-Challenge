// ==============================|| Card module ||============================== //

// ==============================|| IMPORTS

import React from 'react';

//-- native component imports
import {View, Text, Image, StyleSheet} from 'react-native';

//-- single movieCard info type imports
import {Movie} from '../../../constants/types/reduxState';

// ==============================|| Card component||============================== //
/**
 * manages our navigation tree
 * @name: Card
 * @returns {JSX.Element}.
 * @example
 * const data = {item : {poster: "http://...", title: "title", averageRating: 20}}
 * <Card {...data} />
 */
const Card = ({item}: {item: Movie}): JSX.Element => {
  return (
    <View style={styles.card}>
      <Image source={{uri: item.poster}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.rating}>{item.averageRating}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: 'gray',
  },
});
