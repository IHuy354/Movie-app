const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const getPosterUrl = (path: string | null) => {
  if (!path) return "/no-image.png";
  return `${IMAGE_BASE_URL}/${path}`;
};
