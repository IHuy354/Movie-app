import Banner from "./Banner/Banner";
import MovieRow from "./MovieRow/MovieRow";
import LoadingScreen from "../../components/Loading/LoadingScreen";
import { useMediaList } from "../../queries/movies";
import { useHomeSections } from "./libs/useHomeSections";

const Home = () => {
  const bannerQuery = useMediaList("movie", "popular", 1);
  const { sections, isLoading } = useHomeSections();

  if (bannerQuery.isLoading || isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Banner movies={bannerQuery.data?.results ?? []} />

      <div className="py-10">
        {sections.map((section) => (
          <MovieRow
            key={`${section.type}-${section.category}`}
            title={section.title}
            type={section.type}
            movies={section.movies}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
