// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../../service/movieSlice';
import popularReducer from '../../service/popularSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    popularMovies: popularReducer,
  },
});
