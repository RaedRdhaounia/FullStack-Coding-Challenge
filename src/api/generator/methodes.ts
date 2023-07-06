import {symb} from '../../constants/types/symboles';
import {getMovies} from './getMovies';

const query = symb.query;
const related = symb.related;
const byId = symb.byId;

export const getqueryMovies = async (page?: number, text?: string) =>
  await getMovies(query, page, text);
export const gettopRatedMovies = async (page?: number) =>
  await getMovies(related, page);
export const getMovieById = async (page?: number, itemId?: string) =>
  await getMovies(byId, page, itemId);
