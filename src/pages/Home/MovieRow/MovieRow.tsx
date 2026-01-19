import type { Movie } from "../../../types/movie";
import { getPosterUrl } from "../../../utils/image";
import { FaPlay } from "react-icons/fa";
import { useMediaNavigation } from "../../../hooks/useMediaNavigation";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { MovieRowProps } from "./libs/types";



const MovieRow = ({ title, movies, type }: MovieRowProps) => {
  if (!movies.length) return null;

  const moviesData = movies.slice(0, 20);
  const { goToDetail } = useMediaNavigation();
  const navigate = useNavigate();

  return (
    <div className="px-9 mt-10">
      {/* Header */}
      <div className="flex justify-between mt-5">
        <h3 className="font-[500] text-[23px]">{title}</h3>
        <button
          onClick={() => navigate(`${type}`)}
          className="cursor-pointer border-2 rounded-3xl px-6 font-[500] text-[17px] hover:text-red-600 hover:bg-amber-50 hover:border-white duration-300"
        >
          View more
        </button>
      </div>

      {/* Slider */}
      <div className="mt-7">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={16}
          loop
          speed={400}
          autoplay={{
            delay: 4000,
          }}
          className="w-full"
        >
          {moviesData.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div
                className="hover:cursor-pointer"
                onClick={() => goToDetail(type, movie.id)}
              >
                <div className="relative group">
                  <img
                    src={getPosterUrl(movie.poster_path)}
                    alt={movie.title}
                    className="w-full h-87 rounded-3xl"
                    draggable={false}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-red-600 w-21 h-12 rounded-3xl shadow-[1px_1px_27px_7px_#fe0000]
                                 flex items-center justify-center scale-0 group-hover:scale-100
                                 transition duration-300"
                    >
                      <FaPlay className="size-3" />
                    </button>
                  </div>
                </div>

                <p className="text-[17px] mt-2 font-[500] truncate">
                  {movie.title ?? movie.original_name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieRow;
