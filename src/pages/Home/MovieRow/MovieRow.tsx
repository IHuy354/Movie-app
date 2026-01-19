import { useEffect, useState } from "react";
import type { Movie } from "../../../types/movie";
import { getPosterUrl } from "../../../utils/image";
import { motion } from "motion/react";
import { FaPlay } from "react-icons/fa";
import { useMediaNavigation } from "../../../hooks/useMediaNavigation";
import { useNavigate } from "react-router-dom";

type MovieRowProps = {
  title: string;
  movies: Movie[];
  type: string;
};

const VISIBLE_COUNT = 6;
const TRANSITION_DURATION = 0.4;
const AUTO_STEP_DELAY = 4000;

const MovieRow = ({ title, movies, type }: MovieRowProps) => {
  if (movies.length === 0) {
    return null;
  }
  const moviesData = movies.slice(0, 20);
  const { goToDetail } = useMediaNavigation();
  const navigate = useNavigate();

  const extendedMovies =
    moviesData.length > 0
      ? [
          ...moviesData.slice(-VISIBLE_COUNT),
          ...moviesData,
          ...moviesData.slice(0, VISIBLE_COUNT),
        ]
      : [];

  const [index, setIndex] = useState(VISIBLE_COUNT);
  const [duration, setDuration] = useState(TRANSITION_DURATION);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_STEP_DELAY);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!extendedMovies.length) return;

    const maxIndex = extendedMovies.length - VISIBLE_COUNT;

    if (index === 0 || index === maxIndex) {
      const timer = setTimeout(() => {
        setDuration(0);
        setIndex(index === 0 ? maxIndex - 1 : VISIBLE_COUNT);
        requestAnimationFrame(() => {
          setDuration(TRANSITION_DURATION);
        });
      }, TRANSITION_DURATION * 1000);

      return () => clearTimeout(timer);
    }
  }, [index, extendedMovies.length]);

  return (
    <div className="px-9 mt-10 overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex justify-between mt-5">
          <h3 className="font-[500] text-[23px]">{title}</h3>
          <button
            onClick={() => navigate(`${type}`)}
            className="border-2 rounded-3xl px-6  font-[500] text-[17px] cursor-pointer hover:text-red-600 duration-300 hover:bg-amber-50 hover:border-white"
          >
            View more
          </button>
        </div>

        {/* Slider */}
        <div className="mt-7 overflow-hidden">
          <motion.div
            className="flex flex-nowrap"
            animate={{
              translateX: `-${(100 / VISIBLE_COUNT) * index}%`,
            }}
            transition={{
              duration,
              ease: "easeInOut",
            }}
          >
            {extendedMovies.map((movie, index) => (
              <div
                key={`${movie.id}-${index}`}
                className="flex-none w-[calc(100%/6)] px-2"
                onClick={() => goToDetail(type, movie.id)}
              >
                <div className="relative group  hover:cursor-pointer">
                  <img
                    src={getPosterUrl(movie.poster_path)}
                    alt={movie.title}
                    className="w-full rounded-3xl h-87"
                    draggable={false}
                  />

                  {/* Overlay */}
                  <div className=" absolute inset-0 rounded-3xl bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-red-600 w-21 h-12 rounded-3xl shadow-[1px_1px_27px_7px_#fe0000] flex items-center justify-center  scale-0
                                  group-hover:scale-100 transition duration-300"
                    >
                      <FaPlay className="size-3" />
                    </button>
                  </div>
                </div>

                <p className="text-[17px] mt-2 font-[500]">
                  {movie.title ? movie.title : movie.original_name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
