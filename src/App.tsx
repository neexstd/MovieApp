// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from './service/movieSlice';
import { Movie } from './types/movies';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Top100 from './components/Top100';
import MovieDetails from './components/MovieDetails';
import { API_KEY } from './service/apikey';
import { addPopularMovies } from './service/popularSlice';
import Popular from './components/Popular';
import Search from './components/Search';
import PageNotFound from './components/PageNotFound';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestForMovies = async () => {
      const response = await axios.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=2`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=3`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=4`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=5`,
        ),
      ]);

      const allData: Movie[] = [];

      response.map((data) => allData.push(...data.data.results));

      dispatch(addMovies(allData));
    };

    const requestForPopularMovies = async () => {
      const response = await axios.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=2`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=3`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=4`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=5`,
        ),
      ]);

      const allData: Movie[] = [];

      response.map((data) => allData.push(...data.data.results));

      dispatch(addPopularMovies(allData));
    };

    requestForMovies();
    requestForPopularMovies();
  }, [dispatch]);

  return (
    <div className="font-montserrat dark:bg-gray-600">
      <Header />
      <Routes>
        <Route element={<Top100 />} path="/"></Route>
        <Route element={<MovieDetails />} path="/movie/:movieId"></Route>
        <Route element={<Popular />} path="/popular"></Route>
        <Route element={<Search />} path="/search"></Route>
        <Route element={<PageNotFound />} path="/*"></Route>
      </Routes>
    </div>
  );
}
