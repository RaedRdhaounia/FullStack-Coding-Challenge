import config from '../config';

const {endPoint, instance, pages, id} = config;

export async function getMovies(
  ep: Symbol,
  pg: number | undefined,
  _id?: string,
) {
  try {
    const response = await instance.get(endPoint(ep) + id(_id) + pages(pg));
    console.log('response', response.data);
    const result = response.data;
    return result;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}
