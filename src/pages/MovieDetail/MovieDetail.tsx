import Similar from "./Similar/Similar";
import { useParams } from "react-router-dom";
import MovieDetailHeader from "./MovieDetailHeader/MovieDetailHeader";
import { useMediaDetail } from "../../queries/movies";
import VideoYtb from "./Video/VideoYtb";
import LoadingScreen from "../../components/Loading/LoadingScreen";

type Param = {
  id?: string;
  mediaType?: string;
};

const MovieDetail = () => {
  const { id, mediaType } = useParams<Param>();
  const numericId = id ? Number(id) : undefined;

  const {
    data: mediaData,
    isLoading,
    isError,
  } = useMediaDetail(mediaType, numericId);

  if (isLoading) return <div><LoadingScreen/></div>;
  if (isError || !mediaData) return <div className="text-center">Error loading data</div>;

  const headerDetail = mediaData.detail ?? null;
  const headerCasts = mediaData.casts?.cast.slice(0, 5) ?? [];
  const videoYtb = mediaData.videos?.results ?? [];
  const similarData = mediaData.similar.results ?? [];

  return (
    <div className="-mt-27">
      <MovieDetailHeader dataDetail={headerDetail} casts={headerCasts} />
      <VideoYtb videoData={videoYtb} />
      <Similar data={similarData} type={mediaType} />
    </div>
  );
};

export default MovieDetail;