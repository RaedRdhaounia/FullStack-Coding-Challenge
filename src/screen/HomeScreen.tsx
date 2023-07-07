/* eslint-disable react-native/no-inline-styles */
// ==============================|| HomeScreen module ||============================== //

// ==============================|| IMPORTS

import React, {useEffect} from 'react';

//-- import navigation
import {useNavigation} from '@react-navigation/native';

//-- redux imports
import {useDispatch, useSelector} from 'react-redux';
import {fetchTopRatedMovies} from '../redux/favoriteMoviesListSlice'
//-- native components imports
import {View} from 'react-native';

//-- components imports
import {TextInputGen} from '../components/generator/';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//--  component imports
import SeeMore from '../components/others/SeeMore';
import MovieList from '../components/others/homeScreenCard/Card';

//-- types imports
import {
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
} from 'constants/types/Tscreens';

// ==============================|| HomeScreen component ||============================== //

//-------- local component interface
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

/**
 * main screen get list of movies ( by Top rated ) with search input query
 * @name HomeScreen
 * @returns React.FC
 * @example
 * <HomeScreen/>
 */
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useDispatch();

  // --- local state
  const [text, onChangeText] = React.useState('');
  const navigation = useNavigation();
  //-------- function methods
  const movies = useSelector((state: any) => state.movies.topRated);
  // --- handlechange text
  const handleChangeText = (_text: string) => {
    onChangeText(_text);
  };
  useEffect(() => {
    // Dispatch the action to fetch the first list of movies
    dispatch(fetchTopRatedMovies(1));
  }, [dispatch]);
  //-------- render component
  return (
    <SafeAreaWrapper>
      <View style={{paddingBottom: 100}}>
        <TextInputGen onChangeText={handleChangeText} value={text} />
        <MovieList navigation={navigation} searchTerm={text} movies={movies} />
        <SeeMore />
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
