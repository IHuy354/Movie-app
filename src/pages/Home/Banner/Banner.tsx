import { useEffect, useState } from "react";
import type { Movie } from "../../../types/movie";
import { getPosterUrl } from "../../../utils/image";
import { motion, useMotionValue } from "motion/react";

const TRANSITION_DURATION = 0.4;
const DRAG_BUFFER = 600;

const Banner = ({ movies }: { movies: Movie[] }) => {
  const moviesData = movies.slice(0, 5);
  const [posterIndex, setPosterIndex] = useState<number>(2);
  const [transitionDuration, setTransitionDuration] =
    useState(TRANSITION_DURATION);

  const dragX = useMotionValue(0);

  const extendedBanners =
    moviesData.length > 0
      ? [moviesData[moviesData.length - 1], ...moviesData, moviesData[0]]
      : [];

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER) {
      setPosterIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER) {
      setPosterIndex((pv) => pv - 1);
    }
  };

  useEffect(() => {
    if (!extendedBanners.length) return;

    if (posterIndex === 0 || posterIndex === extendedBanners.length - 1) {
      const timer = setTimeout(() => {
        setTransitionDuration(0);
        setPosterIndex(posterIndex === 0 ? extendedBanners.length - 2 : 1);

        requestAnimationFrame(() => {
          setTransitionDuration(TRANSITION_DURATION);
        });
      }, TRANSITION_DURATION * 1000);

      return () => clearTimeout(timer);
    }
  }, [posterIndex]);

  return (
    <div className="-mt-35 overflow-x-hidden">
      {/* top banner  */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.9}
        dragMomentum={false}
        animate={{ translateX: `-${posterIndex * 100}vw` }}
        transition={{
          duration: transitionDuration,
        }}
        className="flex flex-nowrap"
        whileHover={{ cursor: "grab" }}
        whileDrag={{ cursor: "grabbing" }}
        onDragEnd={onDragEnd}
        initial={false}
        style={{ x: dragX }}
      >
        {extendedBanners.map((movie, index) => (
          <div key={index} className="relative w-screen  shrink-0 ">
            {movie.backdrop_path && (
              <div className="relative">
                <img
                  src={getPosterUrl(movie.backdrop_path)}
                  alt={movie.title}
                />
                {/* overlay  */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 via-80% to-[#0f0f0f]" />
              </div>
            )}
            {/* Phần bên trên poster */}
            <div className="absolute inset-0 flex items-center px-29 gap-20">
              {/* left */}
              <div>
                <motion.h1
                  initial={{ y: -70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className=" text-[87px] font-[700]"
                >
                  {movie.title}
                </motion.h1>
                <motion.p
                  initial={{ y: -70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                  className=" font-[500] text-[20px] mt-10"
                >
                  {movie.overview}
                </motion.p>
                <motion.div
                  initial={{ y: -70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                  className="mt-15 flex gap-5"
                >
                  <button className="bg-[#fe0000] rounded-3xl px-9 py-1 font-[500] text-[23px] shadow-[1px_1px_21px_3px_#fe0000] cursor-pointer hover:shadow-[1px_1px_27px_7px_#fe0000] duration-300">
                    Watch now
                  </button>
                  <button className="border-2 rounded-3xl px-9 py-1 font-[500] text-[23px] cursor-pointer hover:text-red-600 duration-300 hover:bg-amber-50 hover:border-white">
                    Watch trailer
                  </button>
                </motion.div>
              </div>

              {/* right poster mini */}
              {movie.poster_path && (
                <motion.img
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={getPosterUrl(movie.poster_path)}
                  alt={movie.title}
                  className="w-95 rounded-3xl pointer-events-none"
                />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
