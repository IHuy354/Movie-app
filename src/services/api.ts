import axios from "./tmdbClient";
import type { MovieResponse } from "../types/movie";

export type MediaType = "movie" | "tv";
export type MediaCategory = "popular" | "top_rated";

const get = async <T>(url: string, params?: object): Promise<T> => {
  const { data } = await axios.get(url, { params });
  return data;
};
export const getMediaList = (
  type: MediaType,
  category: MediaCategory,
  page?: number,
) => {
  return get<MovieResponse>(
    `/${type}/${category}`,
    page ? { page } : undefined,
  );
};

export const getMediaDetail = (type: MediaType, id: number) => {
  return get(`/${type}/${id}`);
};
export const getMediaSimilar = (type: MediaType, id: number) => {
  return get(`/${type}/${id}/similar`);
};

export const getMediaCredits = (type: MediaType, id: number) => {
  return get(`/${type}/${id}/credits`);
};

export const getMediaVideos = (type: MediaType, id: number) => {
  return get(`/${type}/${id}/videos`);
};

// tìm kiếm
export const searchMedia = async (
  type: MediaType,
  query: string,
  page?: number,
) => {
  const response = await axios.get(`/search/${type}`, {
    params: {
      query,
      page,
    },
  });

  return response.data;
};



