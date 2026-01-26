import { useParams, useSearchParams } from "react-router-dom";
import { useMediaSearch } from "../../hooks/useMediaSearch";
import MovieComponent from "../../components/MovieTV/MovieTV";
import type { MediaType } from "../../services/api";
import LoadingScreen from "../../components/Loading/LoadingScreen";

const Media = () => {
  const { mediaType } = useParams();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    loadMore,
    handleSearch,
    search,
  } = useMediaSearch({
    type: mediaType as MediaType,
    category: "popular",
    initialSearch,
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <MovieComponent
      title={mediaType === "movie" ? "Movies" : "TV Series"}
      data={data}
      onLoadMore={loadMore}
      hasMore={hasNextPage}
      isLoadingMore={isFetchingNextPage}
      isFetching={isFetching}
      type={mediaType}
      search={search}
      onSearch={handleSearch}
    />
  );
};

export default Media;
