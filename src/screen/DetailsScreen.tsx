// ==============================|| DetailsScreen module ||============================== //

// ==============================|| IMPORTS

import React, {useEffect, useState} from 'react';

//-- native components imports
import {Alert, FlatList, Image, StyleSheet, Text, View} from 'react-native';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//-- import components
import Badge from '../components/generator/Badge';
import {AntDesign} from '@expo/vector-icons';

//-- types imports
import {
  DetailsScreenNavigationProp,
  DetailsScreenRouteProp,
} from 'constants/types/Tscreens';
import {MovieDetails} from '../constants/types/reduxState';

//-- get movies details from APi
import {getMovieById} from '../api/generator/methodes';

import TypewriterText from 'react-native-typewriter';
import {useFocusEffect} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {getRandomColor} from '../utils/generateRandomColor';
import {imageBaseUrl} from '../api/config';

// ==============================|| DetailsScreen component ||============================== //

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
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(getRandomColor(), false);
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
        Alert.alert('Oops', 'Somethings was wrong');
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
              <View style={styles.headerSubContainer}>
                <Text style={styles.rating}>{vote_average}</Text>
                <AntDesign name={'star'} size={24} color={'yellow'} />
              </View>
            </View>
            <View>
              <FlatList
                data={genres}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <Badge id={item.id} name={item.name} />}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <Text style={styles.duration}>{duration}</Text>
          </View>
          <View style={styles.descriptionBox}>
            <View style={styles.headerContainer}>
              <Text style={styles.descriptionTitle}>overview</Text>
              <Text style={styles.releaseDate}>{release_date}</Text>
            </View>
            <TypewriterText typing={1}>{overview}</TypewriterText>
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
  headerSubContainer: {
    flexDirection: 'row',
  },
  poster: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    opacity: 0.6,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
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
    color: '#999ED7',
  },
  overview: {
    fontSize: 16,
    color: '#0000FF',
    lineHeight: 24,
    padding: 16,
    borderWidth: 2,
    borderRadius: 26,
    borderColor: '#999ED7',
  },
  descriptionBox: {
    opacity: 0.8,
    borderColor: '#999ED7',
    padding: 16,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999ED7',
  },
});
