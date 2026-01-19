import { getPosterUrl } from "../../../utils/image";

const MovieDetailHeader = ({ dataDetail, casts }) => {


  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <img
          className="w-screen"
          src={getPosterUrl(dataDetail?.backdrop_path)}
          alt=""
        />
        {/* overlay  */}
        <div className="absolute bottom-0 left-0 w-full h-200 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f] to-transparent" />

        {/* phần bên trên poster  */}
        <div className="absolute inset-0 flex  px-20 mt-30 gap-10">
          {/* left  */}
          <img
            className="h-130 rounded-3xl"
            src={getPosterUrl(dataDetail?.poster_path)}
          />
          {/* right  */}
          <div>
            <h1 className="font-[700] text-7xl">
              {dataDetail?.title
                ? dataDetail?.title
                : dataDetail?.original_name}
            </h1>
            <div className="flex gap-3 mt-10">
              {dataDetail?.genres.map((genres, index) => (
                <div
                  className="flex bg-black border-2 border-white rounded-xl px-3"
                  key={index}
                >
                  {genres?.name}
                </div>
              ))}
            </div>
            {/* Phần mô tả  */}
            <p className="mt-8">{dataDetail?.overview}</p>
            {/* Tác giả liên quan Casts   */}
            <h2 className="mt-5 text-2xl font-[500] mb-2">Casts</h2>
            <div className="flex gap-4">
              {casts.map((cast, index) => (
                <div key={index} className="w-25">
                  <img
                    src={getPosterUrl(cast?.profile_path)}
                    alt={cast?.name}
                    className="rounded-2xl"
                  />
                  <p>{cast?.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailHeader;
