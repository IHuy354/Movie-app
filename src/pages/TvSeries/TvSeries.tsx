import { useEffect, useState } from "react";
import Moviecpn from "../../component/Moviecpn/Moviecpn";
import { usePageTVMovies } from "../../queries/movies";

function TvSeries() {
  const [page, setPage] = useState<number>(1);
  const { data } = usePageTVMovies(page);
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    if (data?.results) {
      setMovies((prev) => [...prev, ...data.results]);
    }
  }, [data]);
  return (
    <>
      <Moviecpn
        title="TV Series"
        data={movies}
        page={page}
        onPageChange={setPage}
      />
    </>
  );
}

export default TvSeries;
