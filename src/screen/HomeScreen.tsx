/* eslint-disable react-native/no-inline-styles */
// ==============================|| HomeScreen module ||============================== //

// ==============================|| IMPORTS

import React, {useEffect} from 'react';

//-- import navigation
import {useFocusEffect, useNavigation} from '@react-navigation/native';

//-- redux imports
import {useDispatch, useSelector} from 'react-redux';
import {fetchTopRatedMovies} from '../redux/favoriteMoviesListSlice';
//-- native components imports
import {StatusBar, View} from 'react-native';

//-- components imports
import {TextInputGen} from '../components/generator/';

//-- screen styles component imports
import {SafeAreaWrapper} from './SafeAreaWrapper';

//--  component imports
import {MovieList} from '../components/others/';

//-- types imports
import {HomeScreenProps} from 'constants/';
import {Splash} from '../components/others/';
import {getRandomColor} from '../utils/';

// ==============================|| HomeScreen component ||============================== //

//-------- local component interface

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
  const movies = useSelector((state: any) => state.movies.topRated);
  const loading = useSelector((state: any) => state.movies.loading);
  //-------- function methods

  /**
   * @name handleChangeText
   * @description this function used to collect the text change and update the local state text
   * @argument {string} _text
   * @returns {void}
   * @example
   * onChangeText={onChangeText}
   */
  const handleChangeText = (_text: string): void => {
    onChangeText(_text);
  };
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(getRandomColor(), false);
  });
  useEffect(() => {
    // Dispatch the action to fetch the first list of movies
    dispatch(fetchTopRatedMovies(1));
  }, [dispatch]);
  //-------- render component
  return (
    <SafeAreaWrapper>
      <View style={{paddingBottom: 100}}>
        <TextInputGen onChangeText={handleChangeText} value={text} />
        {loading === 'succeeded' ? (
          <MovieList
            navigation={navigation}
            searchTerm={text}
            movies={movies}
          />
        ) : (
          <Splash />
        )}
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
