import { NavLink } from "react-router-dom";
import LogoTitle from "../components/LogoTitle/LogoTitle";
import { useEffect, useState } from "react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex p-2 font-medium transition-colors duration-300 
   hover:text-red-500 hover:border-b-2
   ${isActive ? "border-b-2 border-red-500" : "text-white"}`;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div
        className={` flex justify-between p-7 items-center text-white sticky top-0 z-20 duration-400 ${
          isScrolled ? "bg-black py-5  " : ""
        }`}
      >
        <LogoTitle />
        <div className="text-2xl flex gap-1">
          <NavLink end to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movie" className={navLinkClass}>
            Movies
          </NavLink>
          <NavLink to="/tv" className={navLinkClass}>
            TV Series
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
