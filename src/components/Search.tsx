import { useState } from 'react';
import { API_KEY } from '../service/apikey';
import { Movie } from '../types/movies';
import axios from 'axios';
import MovieCard from './MovieCard';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [movieList, setMoviesList] = useState<Movie[]>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const getSearchedMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1`,
      );
      setMoviesList(response.data.results);
    };

    getSearchedMovies();
  };

  return (
    <div>
      <form className="relative mx-auto mt-10 w-5/12" onSubmit={handleSubmit}>
        <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          onChange={handleChange}
          placeholder="Search for movie..."
          type="text"
          value={searchText}
        />
        <button
          className="absolute right-2.5 bottom-[7px] rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="container mx-auto grid grid-cols-1 gap-10 self-center px-2 py-10 md:grid-cols-2 md:py-10 lg:grid-cols-3 2xl:grid-cols-4">
        {movieList?.map((movie: Movie, index: number) => {
          return <MovieCard index={index} key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Search;

{
  /* <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required></input> */
}
