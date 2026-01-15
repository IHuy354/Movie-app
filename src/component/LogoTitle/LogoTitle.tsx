import { Link } from "react-router-dom";

const LogoTitle = () => {
  return (
    <div className="flex items-center gap-3.5 hover:text-red-500 duration-300 ">
      <img
        className="h-12"
        src="https://calm-cendol-f3d19f.netlify.app/assets/tmovie-55621206.png"
        alt=""
      />
      <Link to="/">
        <h1 className="font-[600] text-4xl">theMovies</h1>
      </Link>
    </div>
  );
};

export default LogoTitle;
