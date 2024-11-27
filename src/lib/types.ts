export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  video: boolean;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  poster_path: string;
}
