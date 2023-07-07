import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StarIcons from '../Star';
import {MovieDetails} from '../../../constants/types/reduxState';
import {DeleteFromFavoriteIcon} from './DeleteButton';

export const RenderCard = ({item}: {item: MovieDetails}) => {
  //-- based url image
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.icon}>
        <DeleteFromFavoriteIcon itemId={item.id} />
      </View>

      <View style={styles.card}>
        <Image
          source={{
            uri: imageBaseUrl + item.poster_path,
          }}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.starContainer}>
            {item.vote_average && StarIcons(item.vote_average)}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// ==============================|| styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  icon: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    alignSelf: 'center',
  },
  rating: {
    fontSize: 14,
    color: 'gray',
  },
  starContainer: {
    flexDirection: 'row',
  },
});
