import type { Movie } from "../../../types/movie";
import type { MediaType } from "../../../services/api";

export interface MovieMediaProps {
  title: string;
  data: Movie[];
  onLoadMore: () => void;
  hasMore: boolean;
  isLoadingMore: boolean;
  isLoading: boolean;
  type?: MediaType;
  search: string;
  onSearch: (query: string) => void;
}