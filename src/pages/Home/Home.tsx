import Banner from "./Banner/Banner";
import MovieRow from "./MovieRow/MovieRow";
import {
  usePopularMovies,
  usePopularTV,
  useTopRatedMovies,
  useTopRatedTV,
} from "../../queries/movies";

const Home = () => {
  const { data: PopularMovieData } = usePopularMovies();
  const movieData = PopularMovieData?.results ?? [];

  const { data: TopMovieData } = useTopRatedMovies();
  const topMovieData = TopMovieData?.results ?? [];

  const { data: topRatedMovie } = usePopularTV();
  const trendingMovieData = topRatedMovie?.results ?? [];

  const { data: topRatedTV } = useTopRatedTV();
  const topratedTVData = topRatedTV?.results ?? [];

  return (
    <>
      <Banner movies={movieData} />
      <div className=" py-10">
        <MovieRow title="Trending Movies" movies={movieData} type="movie"/>
        <MovieRow title="Top Rated Movies" movies={topMovieData} type="movie"/>
        <MovieRow title="Trending TV" movies={trendingMovieData} type="tv"/>
        <MovieRow title="Top Rated TV" movies={topratedTVData} type="tv"/>
      </div>
    </>
  );
};

export default Home;
