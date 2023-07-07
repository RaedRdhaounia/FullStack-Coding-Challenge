import {fetchTopRatedMovies} from '../../utils';
import React, {useState} from 'react';
import {Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../../redux/favoriteMoviesListSlice';

const SeeMore = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.movies);
  const page = store.currentPage;
  const loading = store.loading;
  console.log('loading', loading);
  const [CurrentPage, setPage] = useState<number>(page);
  const loadMoreMovies = () => {
    dispatch(fetchTopRatedMovies(CurrentPage + 1));
    dispatch(setCurrentPage(CurrentPage + 1));
    setPage(CurrentPage + 1);
  };
  if (loading === 'pending') {
    return <Button title="loading please wait..." disabled />;
  }
  return <Button title="load more" onPress={loadMoreMovies} />;
};

export default SeeMore;
