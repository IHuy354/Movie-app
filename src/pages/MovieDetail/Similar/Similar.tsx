import MovieRow from "../../Home/MovieRow/MovieRow";

const Similar = ({ data, type }) => {
  return (
    <>
      <div className="pb-10">
        <MovieRow title="Similar" movies={data} type = {type} />
      </div>
    </>
  );
};

export default Similar;
