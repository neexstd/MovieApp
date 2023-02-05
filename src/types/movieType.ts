import { Movie } from './movies';

export type Movies = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  movies: {
    movies: {
      movies: Movie[];
    };
  };
};
