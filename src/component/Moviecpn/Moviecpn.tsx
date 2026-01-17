import { FaPlay } from "react-icons/fa";
import { getPosterUrl } from "../../utils/image";
import { useMediaNavigation } from "../../hooks/useMediaNavigation";

const Moviecpn = ({ title, data, page, onPageChange, type }) => {
  const { goToDetail } = useMediaNavigation();
  const handleClick = () => {
    onPageChange(page + 1);
  };
  return (
    <>
      {/* header màu trắng  */}
      <div className="relative w-screen h-50 -mt-26">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#0f0f0f]"></div>

        {/* Title header */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          {title}
        </div>
      </div>
      {/* body  */}
      <div className=" mt-15 pb-10 px-10">
        {/* Thanh tìm kiếm  */}
        <div className=" relative w-full  max-w-[520px]">
          <input
            type="text"
            placeholder="Enter Keyword "
            className="pl-5 pr-70 py-2 rounded-3xl bg-black outline-none"
          />
          <button
            type="button"
            className="absolute font-[500] right-10 bg-red-600 hover:bg-red-500 transition duration-300 rounded-full px-7 py-2 shadow-[1px_1px_15px_3px_#fe0000]  hover:shadow-[1px_1px_27px_7px_#fe0000] duration-300"
          >
            Search
          </button>
        </div>
        {/* Danh sách phim  */}
        <div className="grid grid-cols-6 gap-5 mt-15">
          {data.map((movie, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                goToDetail(type, movie.id);
              }}
            >
              <div className="relative group  hover:cursor-pointer">
                <img
                  className="rounded-3xl"
                  src={getPosterUrl(movie.poster_path)}
                  alt={movie.title}
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

              <p className="font-[500] mt-3 mb-3">
                {movie.title || movie.original_name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-screen mt-5">
          <button
            onClick={handleClick}
            className=" border-2 rounded-3xl px-7  font-[500] text-[18px] cursor-pointer hover:text-red-600 duration-300 hover:bg-amber-50 hover:border-white"
          >
            Watch more
          </button>
        </div>
      </div>
    </>
  );
};

export default Moviecpn;
