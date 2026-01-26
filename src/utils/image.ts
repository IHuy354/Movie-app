const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const getPosterUrl = (
  path: string | null | undefined,
  type?: "background" | "img",
) => {
  if (!path) {
    if (type === "background") {
      return "https://placehold.co/1920x1080/FFF/FFF";
    } else {
      return "https://placehold.co/330x500/1e1f21/666666?text=No+Img";
    }
  }
  return `${IMAGE_BASE_URL}${path}`;
};
