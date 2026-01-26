import { useQueries } from "@tanstack/react-query";
import { getMediaList } from "../../../services/api";
import { SECTIONS } from "./constants";

export const useHomeSections = () => {
  const queries = useQueries({
    queries: SECTIONS.map((section) => ({
      queryKey: ["media", section.type, section.category],
      queryFn: () => getMediaList(section.type, section.category, 1),
    })),
  });

  const isLoading = queries.some((q) => q.isLoading);

  const sections = SECTIONS.map((section, index) => ({
    ...section,
    movies: queries[index].data?.results ?? [],
  }));

  return {
    sections,
    isLoading,
  };
};
