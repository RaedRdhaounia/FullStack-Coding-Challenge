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
  favorites: Movie[];
  topRated: Movie[];
  currentPage: number;
  totalPages: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}
