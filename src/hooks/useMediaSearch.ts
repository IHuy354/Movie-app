import { useInfiniteQuery } from "@tanstack/react-query";
import { useState, useCallback } from "react";
import { getMediaList, searchMedia } from "../services/api";
import type { MediaType, MediaCategory } from "../services/api";

interface UseMediaSearchOptions {
  type: MediaType | undefined;
  category?: MediaCategory;
  initialSearch?: string;
}

export const useMediaSearch = ({
  type,
  category = "popular",
  initialSearch = "",
}: UseMediaSearchOptions) => {
  const [search, setSearch] = useState(initialSearch);

  const isSearching = search.trim().length > 0;

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["media-search", type, category, search],
    queryFn: ({ pageParam = 1 }) => {
      if (isSearching) {
        return searchMedia(type, search, pageParam);
      } else {
        return getMediaList(type, category, pageParam);
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    enabled: !!type,
  });

  const allResults = data?.pages.flatMap((page) => page.results) ?? [];

  const handleSearch = useCallback((query: string) => {
    setSearch(query);
  }, []);

  const loadMore = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  return {
    data: allResults,
    isLoading,
    isError,
    hasNextPage: !!hasNextPage,
    isFetchingNextPage,
    loadMore,
    handleSearch,
    search,
  };
};
