import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Reviews } from "../components/Reviews";

export function MoviePage() {
  const params = useParams();
  const id = params.id;
  const [movie, setMovie] = useState(null);
  const API_KEY = "8ec77365";

  async function getMovie(searchTerm) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function grabMovie() {
      await setMovie(getMovie(id));
    }
    grabMovie();
  }, []);

  console.log(movie);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          border: "2px solid green",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {movie && (
          <>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} />
          </>
        )}
      </div>
      <div
        style={{
          border: "2px solid red",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}

// {Title: 'Ant-Man and the Wasp: Quantumania', Year: '2023', Rated: 'PG-13', Released: '17 Feb 2023', Runtime: '124 min', …}Actors: "Paul Rudd, Evangeline Lilly, Michael Douglas"Awards: "1 nomination"BoxOffice: "$190,205,913"Country: "United States, Australia, Canada"DVD: "N/A"Director: "Peyton Reed"Genre: "Action, Adventure, Comedy"Language: "English"Metascore: "48"Plot: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible."Poster: "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_SX300.jpg"Production: "N/A"Rated: "PG-13"Ratings: [{…}]Released: "17 Feb 2023"Response: "True"Runtime: "124 min"Title: "Ant-Man and the Wasp: Quantumania"Type: "movie"Website: "N/A"Writer: "Jeff Loveness, Stan Lee, Larry Lieber"Year: "2023"imdbID: "tt10954600"imdbRating: "N/A"imdbVotes: "82,062"[[Prototype]]: Object
