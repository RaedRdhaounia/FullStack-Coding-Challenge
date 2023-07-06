// ==============================|| DetailsScreen module ||============================== //

// ==============================|| IMPORTS

// -- expo constants variavles
import Constants from 'expo-constants';

// -- axios as api management
import axios, {AxiosInstance} from 'axios';

// -- symboles
import {symb} from '../constants/types/symboles';

//-------- destraction variables envirement needs (token and based url)
const baseURL: string = Constants.manifest?.extra?.api?.baseURL;
const token: string = Constants.manifest?.extra?.api?.token;

// ==============================|| declaretion functions ||============================== //

/**
 * create globale config axios function
 * @name instance
 * @returns {AxiosInstance}
 * @example
 * instance.get(endPoint(query), page(2))
 */
const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

/**
 * generate end points for our request
 * @name {endPoint}
 * @returns {string}
 * @example
 * endPoint(related)
 */
const endPoint = (_type: Symbol): string => {
  switch (_type) {
    case symb.query:
      return '/search/movie?query=';
    case symb.related:
      return '/movie/top_rated?language=en-US';
    case symb.byId:
      return '/movie/';
    default:
      return '/movie/top_rated?language=en-US';
  }
};

/**
 * managment current page
 * @name pages
 * @param {?number} _page
 * @returns {string} &page=@param
 * @example
 * endPoint(related)
 */
const pages = (_page?: number): string => {
  if (!_page) {
    return '&page=1';
  }
  return `&page=${_page}`;
};

const id = (_id?: string): string => {
  if (!_id) {
    return '';
  }
  return `${_id}`;
};
//-------- locat component interface
export default {endPoint, instance, pages, id};
