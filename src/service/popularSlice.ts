import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularMovies: [],
};

const popularSlice = createSlice({
  initialState,
  name: 'popularMovies',
  reducers: {
    addPopularMovies: (state, { payload }) => {
      state.popularMovies = payload;
    },
  },
});

export const { addPopularMovies } = popularSlice.actions;
export const getAllPopularMovies = (state: any) =>
  state.popularMovies.popularMovies;

export default popularSlice.reducer;
