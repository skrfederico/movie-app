import { useController } from "../Controller";
import { Link } from "react-router-dom";

export function MovieDisplay() {
  const { movies } = useController();
  const Loaded = ({ movie }) => {
    return (
      <Link to={`/${movie.title}`}>
        <div className="text-xl font-bold flex flex-col items-center gap-8">
          <h2 className="">{movie.title}</h2>
          <img
            className="object-contain h-96 w-96"
            src={movie.poster}
            alt={movie.title}
          />
        </div>
      </Link>
    );
  };

  const Loading = () => {
    return <></>;
  };

  return (
    <div className="flex justify-evenly gap-8 items-center flex-wrap mr-64 ml-64 mb-64">
      {movies.map((movie, index) => (
        <div key={index}>{movie ? <Loaded movie={movie} /> : <Loading />}</div>
      ))}
    </div>
  );
}
