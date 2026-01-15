import Banner from "./Banner/Banner";
import MovieRow from "./MovieRow/MovieRow";
import {
  usePopularMovies,
  useTopRatedMovies,
  useTopRatedTV,
} from "../../queries/movies";

const Home = () => {
  const { data: PopularMovieData } = usePopularMovies();
  const movieData = PopularMovieData?.results ?? [];

  const { data: TopMovieData } = useTopRatedMovies();
  const topMovieData = TopMovieData?.results ?? [];

  const { data: topRatedMovie } = useTopRatedMovies();
  const trendingMovieData = topRatedMovie?.results ?? [];

  const { data: topRatedTV } = useTopRatedTV([]);
  const topratedTVData = topRatedTV?.results ?? [];

  return (
    <>
      <Banner movies={movieData} />
      <div className=" py-10">
        <MovieRow title="Trending Movies" movies={movieData} />
        <MovieRow title="Top Rated Movies" movies={topMovieData} />
        <MovieRow title="Trending TV" movies={trendingMovieData} />
        <MovieRow title="Top Rated TV" movies={topratedTVData} />
      </div>
    </>
  );
};

export default Home;
