import { useController } from "../Controller";
import { Link } from "react-router-dom";

export function MovieDisplay() {
  const { movies } = useController();
  const Loaded = ({ movie }) => {
    return (
      <Link to={`/${movie.title}`}>
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt={movie.title} />
        </div>
      </Link>
    );
  };

  const Loading = () => {
    return <></>;
  };

  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>{movie ? <Loaded movie={movie} /> : <Loading />}</div>
      ))}
    </div>
  );
}
