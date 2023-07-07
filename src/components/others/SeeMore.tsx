// ==============================|| SeeMore module ||============================== //

// ==============================|| IMPORTS

import React, {useState} from 'react';

//-- native components imports
import {Button} from 'react-native';

//-- redux imports
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../../redux/favoriteMoviesListSlice';

//-- thankAction imports
import {fetchTopRatedMovies} from '../../utils';

// ==============================|| SeeMore component ||============================== //

const SeeMore = () => {
  //============ redux
  //-- destruction dispatch method
  const dispatch = useDispatch();
  //-- selector store variables method
  const store = useSelector((state: any) => state.movies);
  //-- getting loading and pages needs at this component
  const page = store.currentPage;
  const loading = store.loading;

  //============ hooks
  //-- local State
  const [CurrentPage, setPage] = useState<number>(page);

  //============ methods
  //-- load movies function
  const loadMoreMovies = () => {
    dispatch(fetchTopRatedMovies(CurrentPage + 1));
    dispatch(setCurrentPage(CurrentPage + 1));
    setPage(CurrentPage + 1);
  };
  if (loading === 'pending') {
    return <Button title="loading please wait..." disabled />;
  }
  if (loading === 'succeeded') {
    return <Button title="load more" onPress={loadMoreMovies} color="green" />;
  }
  return <Button title="load more" onPress={loadMoreMovies} />;
};

export default SeeMore;
