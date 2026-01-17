import Similar from "./Similar/Similar";

import { useParams } from "react-router-dom";
import MovieDetailHeader from "./MovieDetailHeader/MovieDetailHeader";
import { useEffect, useState } from "react";
import {
  getCreditsMoviesDetail,
  getCreditsTVDetail,
  getMovieDetail,
  getMovieSimilar,
  getMovieVideoDetail,
  getTVDetail,
  getTVSimilar,
  getTVVideoDetail,
} from "../../services/api";
import VideoYtb from "./Video/VideoYtb";

type param = {
  id?: string;
  mediaType?: string;
};

const MovieDetail = () => {
  const { id, mediaType } = useParams<param>();
  const [headerDetail, setHeaderDetail] = useState();
  const [headerCasts, setHeaderCasts] = useState([]);
  const [videoYtb, setVideoYtb] = useState([]);
  const [similarData, setSimilarData] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!id || !mediaType) return;
      if (mediaType === "tv") {
        const res = await getTVDetail(Number(id));
        setHeaderDetail(res.data);
        const ressimilar = await getTVSimilar(Number(id));
        setSimilarData(ressimilar?.data?.results);
        const resCasts = await getCreditsTVDetail(Number(id));
        setHeaderCasts(resCasts?.data?.cast?.slice(0, 5));
        const resVideos = await getTVVideoDetail(Number(id));
        setVideoYtb(resVideos?.data?.results);
      } else {
        const res = await getMovieDetail(Number(id));
        setHeaderDetail(res.data);
        const ressimilar = await getMovieSimilar(Number(id));
        setSimilarData(ressimilar?.data?.results);
        const resCasts = await getCreditsMoviesDetail(Number(id));
        setHeaderCasts(resCasts?.data?.cast?.slice(0, 5));
        const resVideos = await getMovieVideoDetail(Number(id));
        setVideoYtb(resVideos?.data?.results);
      }
    };
    fetchDetail();
  }, [id, mediaType]);

  return (
    <div className="-mt-27">
      <MovieDetailHeader dataDetail={headerDetail} casts={headerCasts} />
      <VideoYtb videoData={videoYtb}  />
      <Similar data={similarData} type={mediaType} />
    </div>
  );
};

export default MovieDetail;
