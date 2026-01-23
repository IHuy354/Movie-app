import { useQuery } from "@tanstack/react-query";
import {
  getMediaCredits,
  getMediaDetail,
  getMediaList,
  getMediaSimilar,
  getMediaVideos,
} from "../services/api";

export type MediaType = "movie" | "tv";
export type MediaCategory = "popular" | "top_rated";
//  new
export const useMediaList = (
  type: MediaType | undefined,
  category: MediaCategory,
  page?: number,
) => {
  return useQuery({
    queryKey: ["media", type, category, page],
    queryFn: () => getMediaList(type, category, page),
  });
};

export const useMediaDetail = (mediaType?: string, id?: number) => {
  return useQuery({
    queryKey: ["media-detail", mediaType, id],
    enabled: !!id && !!mediaType,
    queryFn: async () => {
      if (!id || !mediaType) return null;

      const [detail, similar, casts, videos] = await Promise.all([
        getMediaDetail(mediaType, id),
        getMediaSimilar(mediaType, id),
        getMediaCredits(mediaType, id),
        getMediaVideos(mediaType, id),
      ]);
      return {
        detail: detail ?? [],
        similar: similar ?? [],
        casts: casts ?? [],
        videos: videos ?? [],
      };
    },
  });
};

