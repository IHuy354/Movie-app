import { useParams, useSearchParams } from "react-router-dom";
import { useMediaSearch } from "../../hooks/useMediaSearch";
import MovieComponent from "../../component/MovieTV/MovieTV";
import type { MediaType } from "../../services/api";

const MediaPage = () => {
  const { mediaType } = useParams();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const {
    data,
    isLoading,
    isError,
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

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div className="text-center">Error loading data</div>;

  return (
    <MovieComponent
      title={mediaType === "movie" ? "Movies" : "TV Series"}
      data={data}
      onLoadMore={loadMore}
      hasMore={hasNextPage}
      isLoadingMore={isFetchingNextPage}
      type={mediaType}
      search={search}
      onSearch={handleSearch}
    />
  );
};

export default MediaPage;
