import { useEffect, useState } from "react";
import Moviecpn from "../../component/Moviecpn/Moviecpn";
import { getPagePopularMovies, searchMedia } from "../../services/api";

function Movies() {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");
  const isSearching = search.trim().length > 0;

  // data
  const [movies, setMovies] = useState<any[]>([]);
  const [dataSearch, setDataSearch] = useState<any[]>([]);
  const renderData = isSearching ? dataSearch : movies;

  useEffect(() => {
    const fetchData = async () => {
      if (isSearching) {
        const data = await searchMedia("movie", search, page);
        setDataSearch((prev) =>
          page === 1 ? data.results : [...prev, ...data.results],
        );
      } else {
        const data = await getPagePopularMovies(page);
        setMovies((prev) =>
          page === 1 ? data.results : [...prev, ...data.results],
        );
      }
    };
    fetchData();
  }, [page, search]);
  return (
    <div>
      <Moviecpn
        title="Movies"
        data={renderData}
        setPage={setPage}
        page={page}
        type="movie"
        setSearch={setSearch}
      />
    </div>
  );
}

export default Movies;
