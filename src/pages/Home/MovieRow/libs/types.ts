import type { Movie } from "../../../../types/movie";

type MediaType = "movie" | "tv";

type MovieRowProps = {
  title: string;
  movies: Movie[];
  type: MediaType;
};

export type { MovieRowProps };
