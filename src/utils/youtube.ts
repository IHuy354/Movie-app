const YOUTUBE_EMBED_BASE_URL = "https://www.youtube.com/embed";
export const getYoutubeEmbedUrl = (videoId: string) => {
  if (!videoId) return "";
  return `${YOUTUBE_EMBED_BASE_URL}/${videoId}`;
};
