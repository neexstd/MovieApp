import { useSelector } from 'react-redux';
import { getAllMovies } from '../service/movieSlice';
import MovieCard from './MovieCard';
import { Movie } from '../types/movies';

const Top100: React.FC = () => {
  const movies: Movie[] = useSelector(getAllMovies);

  const renderedMovies = movies.map((movie: Movie, index: number) => {
    return <MovieCard index={index} key={movie.id} movie={movie} />;
  });

  return (
    <div className="container mx-auto grid grid-cols-1 gap-10 self-center px-2 py-10 md:grid-cols-2 md:py-10 lg:grid-cols-3 2xl:grid-cols-4">
      {renderedMovies}
    </div>
  );
};

export default Top100;
