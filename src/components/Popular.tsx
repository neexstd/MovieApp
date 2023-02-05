import { useSelector } from 'react-redux';
import { getAllPopularMovies } from '../service/popularSlice';
import { Movie } from '../types/movies';
import MovieCard from './MovieCard';

const Popular = () => {
  const movies: Movie[] = useSelector(getAllPopularMovies);

  console.log(movies);

  const renderedMovies = movies.map((movie, index: number) => {
    return <MovieCard index={index} key={movie.id} movie={movie} />;
  });

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 gap-10 self-center px-2 py-10 md:grid-cols-2 md:py-10 lg:grid-cols-3 2xl:grid-cols-4">
        {renderedMovies}
      </div>
    </div>
  );
};

export default Popular;
