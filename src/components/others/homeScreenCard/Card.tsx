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

// -- import Start icon
import StarIcon from '../Star';

//-- prop types imports
import {Movie} from '../../../constants/types/reduxState';

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
          </View>
          <View style={styles.averageContainer}>
            <StarIcon />
            <Text>{item.vote_average}</Text>
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
    alignSelf: 'flex-start',
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 12,
    color: 'gray',
  },
  averageContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
});

export default MovieList;
