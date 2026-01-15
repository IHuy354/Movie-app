import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Navigation />

      <div className="bg-[#0f0f0f] text-white ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
