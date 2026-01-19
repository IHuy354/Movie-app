import axios from "./tmdbClient";

type MediaType = "movie" | "tv";

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
// export const getgigido = async (prefix: string) => {
//   const response = await axios.get(prefix);
//   return response;
// };

export const getPagePopularMovies = async (page: number) => {
  const response = await axios.get(`/movie/popular?page=${page}`);
  return response.data;
};
export const getPageTVMovies = async (page: number) => {
  const response = await axios.get(`/tv/popular?page=${page}`);
  return response.data;
};

// detail
export const getMovieSimilar = async (id: number) => {
  const response = await axios.get(`/movie/${id}/similar`);
  return response;
};
export const getTVSimilar = async (id: number) => {
  const response = await axios.get(`/tv/${id}/similar`);
  return response;
};
export const getTVDetail = async (id: number) => {
  const response = await axios.get(`tv/${id}`);
  return response;
};
export const getMovieDetail = async (id: number) => {
  const response = await axios.get(`movie/${id}`);
  return response;
};
export const getCreditsMoviesDetail = async (id: number) => {
  const response = await axios.get(`movie/${id}/credits`);
  return response;
};
export const getCreditsTVDetail = async (id: number) => {
  const response = await axios.get(`tv/${id}/credits`);
  return response;
};
export const getMovieVideoDetail = async (id: number) => {
  const response = await axios.get(`movie/${id}/videos`);
  return response;
};
export const getTVVideoDetail = async (id: number) => {
  const response = await axios.get(`tv/${id}/videos`);
  return response;
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
