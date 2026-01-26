import { Link } from "react-router-dom";

const LogoTitle = () => {
  return (
    <div className="flex items-center gap-3.5 hover:text-red-500 duration-300 ">
      <img className="h-12" src="/logo.png" />
      <Link to="/">
        <h1 className="font-[600] text-4xl">theMovies</h1>
      </Link>
    </div>
  );
};

export default LogoTitle;
