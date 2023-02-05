export type Movie = {
  adult: boolean;
  backdrop_path: string;
  budget: any;
  genre_ids: number[];
  genres: [{ id: string; name: string }];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: [
      {
        iso: string;
        iso2: string;
        key: string;
        name: string;
        official: boolean;
        pusblished_date: string;
        site: string;
        size: string;
        type: string;
      },
    ];
  };
  vote_average: number;
  vote_count: number | undefined;
};
