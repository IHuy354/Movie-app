import axios from "./tmdbClient";

export const getPopularMovies = async () => {
  const response = await axios.get("/movie/popular");
  return response;
};
export const getTopMovies = async () => {
  const response = await axios.get("/movie/top_rated");
  return response;
};
export const getTrendingTV = async () => {
  const response = await axios.get("tv/popular");
  return response;
};
export const getTopratedTV = async () => {
  const response = await axios.get("tv/top_rated");
  return response;
};

export const getPagePopularMovies = async (page: number) => {
  const response = await axios.get(`/movie/popular?page=${page}`);
  return response;
};
export const getPageTVMovies = async (page: number) => {
  const response = await axios.get(`/tv/popular?page=${page}`);
  return response;
};
