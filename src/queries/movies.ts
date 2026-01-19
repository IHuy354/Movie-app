import { useQuery } from "@tanstack/react-query";
import {
  getMovieDetail,
  getMovieSimilar,
  getPagePopularMovies,
  getPageTVMovies,
  getPopularMovies,
  getTopMovies,
  getTopratedTV,
  getTrendingTV,
  getTVDetail,
  searchMedia,
} from "../services/api";

export const usePopularMovies = () =>
  useQuery({
    queryKey: ["movies", "popular"],
    queryFn: async () => {
      const res = await getPopularMovies();
      return res.data;
    },
  });

export const useTopRatedMovies = () =>
  useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: async () => {
      const res = await getTopMovies();
      return res.data;
    },
  });

export const usePopularTV = () =>
  useQuery({
    queryKey: ["tv", "popular"],
    queryFn: async () => {
      const res = await getTrendingTV();
      return res.data;
    },
  });

export const useTopRatedTV = () =>
  useQuery({
    queryKey: ["tv", "topRated"],
    queryFn: async () => {
      const res = await getTopratedTV();
      return res.data;
    },
  });

export const usePagePopularMovies = (page: number) =>
  useQuery({
    queryKey: ["movies", "popular", page],
    queryFn: async () => {
      const res = await getPagePopularMovies(page);
      return res.data;
    },
  });
export const usePageTVMovies = (page: number) =>
  useQuery({
    queryKey: ["tv", "page", page],
    queryFn: async () => {
      const res = await getPageTVMovies(page);
      return res.data;
    },
  });

export const useMovieSimilar = (id?: number) => {
  return useQuery({
    queryKey: ["movie", "similar", id],
    queryFn: async () => {
      const res = await getMovieSimilar(id!);
      return res.data;
    },
    enabled: !!id,
  });
};


// export const useTVDetail = (id?: number) => {
//   return useQuery({
//     queryKey: ["tv", "id", id],
//     queryFn: async () => {
//       const res = await getTVDetail(id!);
//       return res.data;
//     },
//     enabled: !!id,
//   });
// };
// export const useMovieDetail = (id?: number) => {
//   return useQuery({
//     queryKey: ["movie", "id", id],
//     queryFn: async () => {
//       const res = await getMovieDetail(id!);
//       return res.data;
//     },
//     enabled: !!id,
//   });
// };
