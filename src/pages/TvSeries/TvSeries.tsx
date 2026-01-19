import { useEffect, useState } from "react";
import Moviecpn from "../../component/Moviecpn/Moviecpn";
import { getPageTVMovies, searchMedia } from "../../services/api";

const TvSeries = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const isSearching = search.trim().length > 0;
  //data
  const [defaultMovies, setDefaultMovies] = useState<any[]>([]);
  const [searchMovies, setSearchMovies] = useState<any[]>([]);
  const renderData = isSearching ? searchMovies : defaultMovies;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isSearching) {
          const data = await searchMedia("tv", search, page);

          setSearchMovies((prev) =>
            page === 1 ? data.results : [...prev, ...data.results],
          );
        } else {
          const data = await getPageTVMovies(page);
          setDefaultMovies((prev) =>
            page === 1 ? data?.results : [...prev, ...data.results],
          );
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [page, search]);

  return (
    <>
      <Moviecpn
        title="Tv Series"
        data={renderData}
        setPage={setPage}
        page={page}
        type="tv"
        setSearch={setSearch}
      />
    </>
  );
};

export default TvSeries;
