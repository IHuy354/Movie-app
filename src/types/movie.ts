export type Movie = {
  id: number;
  title: string;
  original_name: string | null;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MediaType = "movie" | "tv";
export type MediaCategory = "popular" | "top_rated";
