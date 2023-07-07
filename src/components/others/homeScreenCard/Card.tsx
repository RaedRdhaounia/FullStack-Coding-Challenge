// ==============================|| MovieList module ||============================== //

// ==============================|| IMPORTS

import React, {useEffect, useState} from 'react';

//-- native components imports
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

//-- prop types imports
import {Movie} from '../../../constants/types/reduxState';
import StarIcons from '../Star';

// ==============================|| MovieList component ||============================== //

//-------- local component props interface
interface MovieListP {
  movies: Movie[];
  searchTerm: string;
  navigation: any;
}

/**
 *
 * @name MovieList
 * @returns React.FC
 * @example
 * <MovieList navigation={navigation} movies={movies} searchTerm={searchTerm} />
 */
const MovieList: React.FC<MovieListP> = ({movies, searchTerm, navigation}) => {
  //============ hooks
  //-- local State
  const [filteredMovies, setFilteredMovies] = useState(movies);

  //-- update component depends on searchTerm
  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredMovies(filtered);
  }, [movies, searchTerm]);

  // ==============================|| MovieList component ||============================== //

  const renderCard = ({item}: {item: Movie}) => {
    //-- based url image
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
    //-- navigation function declare method
    const handleNavigate = (id: number) => {
      navigation.navigate('Details', {itemId: id});
    };
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => handleNavigate(item.id)}>
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
              {StarIcons(item.vote_average)}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // ==============================|| render component
  return (
    <FlatList
      data={filteredMovies}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={renderCard}
      contentContainerStyle={styles.container}
    />
  );
};

// ==============================|| styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
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

export default MovieList;
