import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./Layout/MainLayout";
 
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Media from "./pages/Media/Media";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>

            {/* page chung cho movie và tv  */}
            <Route path=":mediaType" element={<Media />} />
            {/* detail page */}
            <Route path=":mediaType/:id" element={<MovieDetail />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
