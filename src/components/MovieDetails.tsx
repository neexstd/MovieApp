import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Movie } from '../types/movies';
import { AiFillStar } from 'react-icons/ai';
import millify from 'millify';

// type Props = {};

const MovieDetails: React.FC = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState<Movie>();
  const [simmilarMovies, setSimmilarMovies] = useState<Movie[]>();

  useEffect(() => {
    const getMovieInfo = async () => {
      const response = await axios.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=851d45766e912e1a05c9cf657a89ad40&append_to_response=videos`,
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=851d45766e912e1a05c9cf657a89ad40&page=1`,
        ),
      ]);
      setMovieInfo(response[0].data);
      setSimmilarMovies(response[1].data.results);
    };
    getMovieInfo();
  }, [movieId]);

  console.log(simmilarMovies);

  const renderedGenres = movieInfo?.genres
    .map((genre) => {
      return genre.name.toLowerCase();
    })
    .join()
    .replaceAll(',', ', ');

  return (
    <div className="mx-auto w-10/12 py-14 xl:w-8/12">
      <div className="justify-between xl:flex">
        <div className="xl:flex">
          <div>
            <img
              alt={`Poster of ${movieInfo?.title}`}
              className="rounded-lg xl:max-w-sm"
              src={
                'https://image.tmdb.org/t/p/original/' + movieInfo?.poster_path
              }
            />
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mt-4 h-[360px] w-full rounded-lg xl:h-[240px] xl:w-[383px]"
              frameBorder="0"
              src={`https://www.youtube.com/embed/${movieInfo?.videos.results[0]?.key}`}
              title="YouTube video player"
            ></iframe>
          </div>
          <div className="mt-10 xl:ml-20">
            <h2 className="max-w-lg text-4xl font-black dark:text-white">
              {movieInfo?.title} ({movieInfo?.release_date.slice(0, 4)})
            </h2>
            <div className="mt-9 block xl:hidden">
              <p className="flex items-end gap-3 text-4xl font-black dark:text-white">
                {movieInfo?.vote_average.toFixed(1)} <AiFillStar color="gold" />
              </p>
            </div>
            <h3 className="mt-10 text-xl font-semibold dark:text-white">
              {movieInfo?.tagline === ''
                ? ''
                : '«' +
                  movieInfo?.tagline.slice(
                    0,
                    movieInfo?.tagline.lastIndexOf('.'),
                  ) +
                  '»'}
            </h3>
            <ul className="mt-10 dark:text-white">
              <li className="mt-1">
                <strong>release date:</strong>{' '}
                {movieInfo?.release_date.replaceAll('-', '.')}
              </li>
              <li className="mt-1">
                <strong> original title:</strong> {movieInfo?.original_title}
              </li>
              <li className="mt-1">
                <strong>budget:</strong> {millify(movieInfo?.budget)}$
              </li>
              <li className="mt-1">
                <strong>runtime:</strong> {movieInfo?.runtime} min
              </li>
              <li className="mt-1">
                <strong>genres: </strong>
                {renderedGenres}
              </li>
              <li className="mt-1">
                <strong>description: </strong>
                <div className="mt-1">{movieInfo?.overview}</div>
              </li>
            </ul>
            <h3 className="mt-10 text-2xl dark:text-white">simmilar movies</h3>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
              {simmilarMovies?.map((movie, index: number) => {
                if (index >= 4) return;
                return (
                  <NavLink key={movie.id} to={`/movie/${movie.id}`}>
                    <img
                      alt="poster"
                      className="max-h-64 rounded-lg"
                      src={
                        'https://image.tmdb.org/t/p/original/' +
                        movie?.poster_path
                      }
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-9 hidden xl:block">
          <p className="flex items-end gap-3 text-4xl font-black dark:text-white">
            {movieInfo?.vote_average.toFixed(1)} <AiFillStar color="gold" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
