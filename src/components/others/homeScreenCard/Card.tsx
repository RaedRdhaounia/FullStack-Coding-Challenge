// ==============================|| MovieList module ||============================== //

// ==============================|| IMPORTS

import React, {useEffect, useRef, useState} from 'react';

//-- native components imports
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Alert,
} from 'react-native';

//-- prop types imports
import {Movie} from '../../../constants/types/reduxState';
import StarIcon from '../Star';

// ==============================|| MovieList component ||============================== //
const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

// -- create instance for animation FlatList component
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<Movie>);

//-------- local component props interface
interface MovieListP {
  movies: Movie[];
  searchTerm: string;
  navigation: any;
}
interface RenderCardP {
  item: Movie;
  index: number;
}
/**
 *
 * @name MovieList
 * @description this components is created to execute the movie list
 * @property using animated component we crete an animated FlatList based on opacity on scrolling
 * @returns React.FC
 * @example
 * <MovieList navigation={navigation} movies={movies} searchTerm={>searchTerm} />
 */
const MovieList: React.FC<MovieListP> = ({movies, searchTerm, navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  /**
   *
   * @name handleScroll
   * @description Takes an array of mappings and extracts values from each arg accordingly
   * @argument nativeEvent : argMapping, useNativeDriver: EventConfig
   * @returns Animated
   * @example
   * onScroll={Animated.event(
   * [{nativeEvent: {contentOffset: {x: this._scrollX}}}],
   * {listener}
   * )}
   */
  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );

  //============ hooks
  //-- local State
  const [filteredMovies, setFilteredMovies] = useState(movies); // new filtered movies list
  const [cardHeight, setCardHeight] = useState(1); // card Height
  //-- ref State
  const cardRef = useRef<TouchableOpacity>(null);
  //-- useEffect State
  const handleLayout = () => {
    if (cardRef.current) {
      cardRef.current?.measureLayout(
        cardRef.current,
        (left, top, width, height) => {
          setCardHeight(height * 2);
        },
        () => {
          Alert.alert('something was wrong please try to scroll down');
        },
      );
    }
  };
  //-- update card height when getting scroll depends on title size
  useEffect(() => {
    handleLayout();
  }, []);

  //-- update component depends on searchTerm
  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredMovies(filtered);
  }, [movies, searchTerm]);

  // ==============================|| MovieList component ||============================== //

  /**
   *
   * @name RenderCard
   * @description render single Card movie component
   * @argument {RenderCardP} {item, index}
   * @returns {JSX.Element}
   * @example
   * <RenderCard {...Movie} idex ={key} />
   */
  function RenderCard({item, index}: RenderCardP): JSX.Element {
    //-- card opacity animated onScroll
    const cardOpacity = scrollY.interpolate({
      inputRange: [
        ((index - 2) * cardHeight) / 4,
        ((index - 1) * cardHeight) / 4,
        (index * cardHeight) / 4,
        ((index + 1) * cardHeight) / 4,
        ((index + 2) * cardHeight) / 4,
      ],
      outputRange: [0.2, 1, 0.7, 0.7, 0.2],
      extrapolate: 'clamp',
    });

    //-- navigation function declare method
    const handleNavigate = (id: number) => {
      navigation.navigate('Details', {itemId: id});
    };

    return (
      <Animated.View
        style={{
          ...styles.cardContainer,
          opacity: cardOpacity,
        }}>
        <TouchableOpacity
          ref={cardRef}
          onLayout={handleLayout}
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
      </Animated.View>
    );
  }

  // ==============================|| render component
  return (
    <AnimatedFlatList
      data={filteredMovies}
      keyExtractor={(item: Movie) => item.id.toString()}
      numColumns={2}
      renderItem={RenderCard}
      contentContainerStyle={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}
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
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#999ED7',
    elevation: 24,
    shadowColor: 'blue',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 150,
    height: 200,
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
  },
  averageContainer: {
    position: 'absolute',
    top: 0,
    right: 12,
    flexDirection: 'row',
  },
});

export default MovieList;
