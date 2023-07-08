import {symb} from '../../constants/types/symboles';
import {getMovies} from './getMovies';

const {related, byId} = symb;

export const gettopRatedMovies = async (page?: number) =>
  await getMovies(related, page);
export const getMovieById = async (page?: number, itemId?: string) =>
  await getMovies(byId, page, itemId);
