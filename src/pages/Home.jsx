import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async (query) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=17cda987&s=${query}`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch {
      setError("Something went wrong!");
    }
    setLoading(false);
  };

  return (
  <div className="home-container">
    <div className="home">
      <h1>Movie Search</h1>
      <SearchBar onSearch={searchMovies} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  </div>
);
}
