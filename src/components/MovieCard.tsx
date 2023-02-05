import React from 'react';
import { Movie } from '../types/movies';
import { AiFillStar } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

type Props = {
  index: number;
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie, index }) => {
  return (
    <div className="max-w-sm place-self-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <NavLink to={`/movie/${movie.id}`}>
        <img
          alt="2"
          className="rounded-t-lg"
          src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
        />
      </NavLink>
      <div className="p-5">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white md:text-lg xl:text-xl">
          {index + 1 + '. '}
          {movie.title.length > 25
            ? movie.title.slice(0, 25) + '...'
            : movie.title}
        </h5>

        <p className="mb-3 flex items-center gap-2 font-normal text-gray-700 dark:text-gray-400">
          Rate: {movie.vote_average} <AiFillStar />
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

// import React from 'react'

// type Props = {}

// const MovieCard = (props: Props) => {
//   return (
//     <div>MovieCard</div>
//   )
// }

// export default MovieCard
