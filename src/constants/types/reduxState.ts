export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface Genre {
  id: number;
  name: string;
}
export interface MovieDetails {
  id: number;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  genres?: Genre[];
  release_date?: number;
  duration?: number;
  overview?: string;
}

export interface MoviesState {
  topRated: Movie[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}
