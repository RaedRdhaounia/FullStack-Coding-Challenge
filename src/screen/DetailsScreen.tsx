// ==============================|| DetailsScreen module ||============================== //

// ==============================|| IMPORTS

import React, {useEffect, useState} from 'react';

//-- native components imports
import {Image, StyleSheet, Text, View} from 'react-native';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//-- types imports
import {
  DetailsScreenNavigationProp,
  DetailsScreenRouteProp,
} from 'constants/types/Tscreens';
import {Genre, MovieDetails} from '../constants/types/reduxState';

//-- get movies details from APi
import {getMovieById} from '../api/generator/methodes';

// ==============================|| DetailsScreen component ||============================== //

//-------- based url image
const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

//-------- local component interface
interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

/**
 * component to see a single movie details
 * @name DetailsScreen
 * @returns React.FC
 * @example
 * <DetailsScreen/>
 */
const DetailsScreen: React.FC<DetailsScreenProps> = ({route}) => {
  // --- destruction params
  const {itemId} = route.params;

  //-------- local states
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDetails>({
    id: itemId,
  });
  useEffect(() => {
    async function handleMovie() {
      try {
        const result = (await getMovieById(
          1,
          itemId.toString(),
        )) as MovieDetails;
        setMovie(result);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }
    handleMovie();
  }, [itemId]);
  if (loading) {
    return (
      <SafeAreaWrapper>
        <Text>loading</Text>
      </SafeAreaWrapper>
    );
  }

  //-------- destruction movies details
  const {
    poster_path,
    title,
    vote_average,
    genres,
    duration,
    overview,
    release_date,
  } = movie;

  //-------- render component
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Image
          source={{uri: imageBaseUrl + poster_path}}
          resizeMode="cover"
          style={styles.poster}
        />
        <View>
          <View style={styles.detailsContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.rating}>{vote_average}</Text>
            </View>

            <View>
              {genres &&
                genres.map((gender: Genre, index: number) => {
                  return (
                    <Text key={index} style={styles.genre}>
                      {gender.name}
                    </Text>
                  );
                })}
            </View>
            <Text style={styles.releaseDate}>{release_date}</Text>
            <Text style={styles.duration}>{duration}</Text>
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionTitle}>overview</Text>
            <Text style={styles.overview}>{overview}</Text>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  poster: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0000FF',
    marginTop: 16,
  },
  genre: {
    fontSize: 16,
    marginTop: 8,
  },
  releaseDate: {
    fontSize: 14,
    color: '#0000FF',
    marginTop: 8,
  },
  duration: {
    fontSize: 14,
    color: '#0000FF',
    marginTop: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0000FF',
  },
  overview: {
    fontSize: 16,
    color: '#0000FF',
    lineHeight: 24,
    padding: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  descriptionBox: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 16,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
