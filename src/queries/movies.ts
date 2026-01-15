import { useQuery } from "@tanstack/react-query";
import {
  getPagePopularMovies,
  getPageTVMovies,
  getPopularMovies,
  getTopMovies,
  getTopratedTV,
  getTrendingTV,
} from "../services/api";
import { number } from "motion";

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
    queryKey: ["movies", "popular", page],
    queryFn: async () => {
      const res = await getPageTVMovies(page);
      return res.data;
    },
  });
