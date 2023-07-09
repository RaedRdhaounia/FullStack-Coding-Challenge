import {symb} from '../../constants/';
import {getMovies} from './getMovies';

const {byId, related} = symb;

export const gettopRatedMovies = async (page?: number) =>
  await getMovies(related, page);
export const getMovieById = async (page?: number, itemId?: string) =>
  await getMovies(byId, page, itemId);
