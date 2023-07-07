/* eslint-disable react-native/no-inline-styles */
// ==============================|| HomeScreen module ||============================== //

// ==============================|| IMPORTS

import React, {useEffect} from 'react';

//-- import navigation
import {useNavigation} from '@react-navigation/native';

//-- redux imports
import {useDispatch, useSelector} from 'react-redux';
import {fetchTopRatedMovies} from '../redux/favoriteMoviesListSlice';
//-- native components imports
import {View} from 'react-native';

//-- components imports
import {TextInputGen} from '../components/generator/';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//--  component imports
import MovieList from '../components/others/homeScreenCard/Card';

//-- types imports
import {
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
} from 'constants/types/Tscreens';
import Splash from '../components/others/Splash';

// ==============================|| HomeScreen component ||============================== //

//-------- local component interface
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

/**
 * main screen get list of movies ( by Top rated )
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
  const loading = useSelector((state: any) => state.movies.loading);
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
        {loading === 'succeeded' ? <MovieList navigation={navigation} searchTerm={text} movies={movies} /> : <Splash/> }
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
