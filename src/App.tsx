import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./Layout/MainLayout";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TvSeries/TvSeries";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="movie" element={<Movies />}></Route>
            <Route path="tv" element={<TvSeries />}></Route>

            {/* detail page */}
            <Route path=":mediaType/:id" element={<MovieDetail/>}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
