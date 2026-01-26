import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "motion/react";
import type { Movie } from "../../../types/movie";
import { getPosterUrl } from "../../../utils/image";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getMediaVideos } from "../../../services/api";
import { getYoutubeEmbedUrl } from "../../../utils/youtube";

const Banner = ({ movies }: { movies: Movie[] }) => {
  const navigate = useNavigate();
  const moviesData = movies.slice(0, 5);

  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loadingTrailer, setLoadingTrailer] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWatchTrailer = async (movieId: number) => {
    setLoadingTrailer(true);
    try {
      const res = await getMediaVideos("movie", movieId);
      const key = res?.results?.[0]?.key ?? null;
      if (key) {
        setTrailerKey(key);
        setShowTrailer(true);
      } else {
        return;
      }
    } catch (err) {
      return err;
    } finally {
      setLoadingTrailer(false);
    }
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="-mt-35 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        speed={400}
        className="w-full h-full"
        onRealIndexChange={handleSlideChange}
      >
        {moviesData.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <div className="relative w-screen">
              {movie.backdrop_path && (
                <div className="relative">
                  <img
                    src={getPosterUrl(movie.backdrop_path)}
                    alt={movie.title}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 via-80% to-[#0f0f0f]" />
                </div>
              )}

              {/* On backgr  */}
              <div className="absolute inset-0 flex items-center px-20 gap-15 ">
                <div>
                  {activeIndex === index && (
                    <>
                      <motion.h1
                        initial={{ y: -60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-[87px] font-bold"
                      >
                        {movie.title}
                      </motion.h1>

                      <motion.p
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="   font-medium text-sm sm:text-base lg:text-[20px] mt-4  line-clamp-3 lg:line-clamp-none"
                      >
                        {movie.overview}
                      </motion.p>

                      <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-15 flex gap-5"
                      >
                        <button
                          onClick={() => navigate(`movie/${movie.id}`)}
                          className=" cursor-pointer bg-[#fe0000] rounded-3xl px-4 py-1 sm:px-4 md:px-6 lg:px-9 font-medium text-[7px] sm:text-[10px] md:text-[12px] lg:text-[23px] shadow-[1px_1px_21px_3px_#fe0000] hover:shadow-[1px_1px_27px_7px_#fe0000] duration-300"
                        >
                          Watch now
                        </button>

                        <button
                          onClick={() => handleWatchTrailer(movie.id)}
                          className="cursor-pointer border-2 rounded-3xl px-9 py-1 font-medium text-[23px] hover:text-red-600 hover:bg-amber-50 hover:border-white duration-300 flex items-center gap-3"
                        >
                          {loadingTrailer ? "Loading..." : "Watch trailer"}
                        </button>
                      </motion.div>
                    </>
                  )}
                </div>

                {movie.poster_path && (
                  <>
                    {activeIndex === index && (
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={getPosterUrl(movie.poster_path)}
                        alt={movie.title}
                        className="hidden sm:hidden md:hidden lg:block lg:w-75 xl:w-95 rounded-3xl mr-10"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showTrailer && trailerKey && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowTrailer(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-180 h-120">
            <iframe
              src={getYoutubeEmbedUrl(trailerKey)}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
