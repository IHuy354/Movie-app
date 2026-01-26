import { FaPlay } from "react-icons/fa";
import { getPosterUrl } from "../../utils/image";
import { useMediaNavigation } from "../../hooks/useMediaNavigation";
import { useEffect, useState } from "react";
import MovieSkeleton from "../Loading/MovieSkeleton";
import type { MovieMediaProps } from "./libs/MovieMediaProps";

const Media = ({
  title,
  data,
  onLoadMore,
  hasMore,
  isLoadingMore,
  isFetching,
  type,
  search,
  onSearch,
}: MovieMediaProps) => {
  const { goToSearch, goToDetail } = useMediaNavigation();
  const [keyword, setKeyword] = useState("");


  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(keyword);
    goToSearch(type, keyword);
  };

  const SKELETON_COUNT = 20;
  const skeletonArray = Array.from({ length: SKELETON_COUNT });
  return (
    <>
      {/* header white  */}
      <div className="relative w-full h-50 -mt-26 ">
        <div className="absolute inset-0 bg-linear-to-b from-white to-[#0f0f0f]"></div>

        {/* Title header */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          {title}
        </div>
      </div>
      {/* body  */}
      <div className=" mt-15 pb-10 px-12">
        {/* Search input  */}
        <form onSubmit={handleSearch} className=" relative w-130">
          <input
            type="text"
            placeholder="Enter Keyword "
            className="pl-5 pr-70 py-2 rounded-3xl bg-black outline-none"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="submit"
            disabled={isFetching}
            className="absolute font-medium cursor-pointer right-10 bg-red-600 hover:bg-red-500 transition duration-300 rounded-full px-7 py-2 shadow-[1px_1px_15px_3px_#fe0000]  hover:shadow-[1px_1px_27px_7px_#fe0000] duration-300"
          >
            {isFetching ? "Loading..." : "Search"}
          </button>
        </form>
        {/* media list  */}
        <div className="grid grid-cols-6  gap-5 mt-15">
          {data?.map((movie) => (
            <div
              key={movie.id}
              className="cursor-pointer"
              onClick={() => {
                goToDetail(type, movie.id);
              }}
            >
              <div className="relative group">
                <img
                  className="rounded-3xl h-85 w-full object-cover"
                  src={getPosterUrl(movie?.poster_path, "img")}
                  alt={movie.title}
                />
                {/* Overlay */}
                <div className=" absolute inset-0 rounded-3xl bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-red-600 cursor-pointer w-21 h-12 rounded-3xl shadow-[1px_1px_27px_7px_#fe0000] flex items-center justify-center  scale-0
                                                group-hover:scale-100 transition duration-300"
                  >
                    <FaPlay className="size-3" />
                  </button>
                </div>
              </div>

              <p className="font-medium mt-3 mb-3">
                {movie.title || movie.original_name}
              </p>
            </div>
          ))}
          {isLoadingMore &&
            skeletonArray.map((_, index) => (
              <div key={`skeleton-${index}`}>
                <MovieSkeleton />
              </div>
            ))}
        </div>
        {data.length === 0 && search.length > 0 && (
          <div className="text-center text-white text-2xl mt-10">
            Không tìm thấy firm cho từ khóa: "{search}"
          </div>
        )}

        {/* Load more button  */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={onLoadMore}
              disabled={isLoadingMore}
              className="cursor-pointer border-2 rounded-3xl px-6  font-medium text-[17px] hover:text-red-600 hover:bg-amber-50 hover:border-white duration-300"
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Media;
