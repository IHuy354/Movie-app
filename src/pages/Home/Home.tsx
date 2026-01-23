import Banner from "./Banner/Banner";
import MovieRow from "./MovieRow/MovieRow";
import { useMediaList } from "../../queries/movies";
import LoadingScreen from "../../component/Loading/LoadingScreen";

const Home = () => {
  //banner data
  const { data: BannerMovieData, isLoading: isBannerLoading } = useMediaList("movie", "popular", 1);
  const movieData = BannerMovieData?.results ?? [];

  const { data: TopRatedData, isLoading: isTopRatedLoading } = useMediaList("movie", "top_rated", 1);
  const topMovieData = TopRatedData?.results ?? [];

  const { data: topRatedMovie, isLoading: isTrendingTVLoading } = useMediaList("tv", "popular", 1);
  const trendingMovieData = topRatedMovie?.results ?? [];

  const { data: topRatedTV, isLoading: isTopRatedTVLoading } = useMediaList("tv", "top_rated", 1);
  const topRatedTVData = topRatedTV?.results ?? [];


  const isLoading = isBannerLoading || isTopRatedLoading || isTrendingTVLoading || isTopRatedTVLoading;

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Banner movies={movieData} />
      <div className=" py-10">
        <MovieRow title="Trending Movies" movies={movieData} type="movie" />
        <MovieRow title="Top Rated Movies" movies={topMovieData} type="movie" />
        <MovieRow title="Trending TV" movies={trendingMovieData} type="tv" />
        <MovieRow title="Top Rated TV" movies={topRatedTVData} type="tv" />
      </div>
    </>
  );
};

export default Home;