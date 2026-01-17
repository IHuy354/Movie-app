import { useEffect, useState } from "react";
import Moviecpn from "../../component/Moviecpn/Moviecpn";
import { usePagePopularMovies } from "../../queries/movies";

function Movies() {
  const [page, setPage] = useState<number>(1);
  const { data } = usePagePopularMovies(page);

  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    if (data?.results) {
      setMovies((prev) => [...prev, ...data.results]);
    }
  }, [data]);
  return (
    <div>
      <Moviecpn
        title="Movies"
        page={page}
        onPageChange={setPage}
        data={movies}
        type="movie"
      />
    </div>
  );
}

export default Movies;
