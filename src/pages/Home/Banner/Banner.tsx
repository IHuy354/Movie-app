import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { motion } from "motion/react";
import type { Movie } from "../../../types/movie";
import { getPosterUrl } from "../../../utils/image";

const Banner = ({ movies }: { movies: Movie[] }) => {
  const moviesData = movies.slice(0, 5);

  return (
    <div className="-mt-35 overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        effect="cube"
        speed={400}
        
        className="w-full h-full"
      >
        {moviesData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative w-screen">
              {/* background */}
              {movie.backdrop_path && (
                <div className="relative">
                  <img
                    src={getPosterUrl(movie.backdrop_path)}
                    alt={movie.title}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 via-80% to-[#0f0f0f]" />
                </div>
              )}

              {/* content */}
              <div className="absolute inset-0 flex  items-center px-20 gap-15 ">
                {/* left */}
                <div>
                  <motion.h1
                  
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-[87px] font-[700]"
                  >
                    {movie.title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-[500] text-[20px] mt-10"
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
                      onClick={() => goToDetail("movie", movie.id)}
                      className=" cursor-pointer bg-[#fe0000] rounded-3xl px-9 py-1 font-[500] text-[23px] shadow-[1px_1px_21px_3px_#fe0000] hover:shadow-[1px_1px_27px_7px_#fe0000] duration-300"
                    >
                      Watch now
                    </button>

                    <button className="cursor-pointer border-2 rounded-3xl px-9 py-1 font-[500] text-[23px] hover:text-red-600 hover:bg-amber-50 hover:border-white duration-300">
                      Watch trailer
                    </button>
                  </motion.div>
                </div>

                {/* right poster */}
                {movie.poster_path && (
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    src={getPosterUrl(movie.poster_path)}
                    alt={movie.title}
                    className="w-95 rounded-3xl"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
