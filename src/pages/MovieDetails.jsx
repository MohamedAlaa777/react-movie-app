import "./MovieDetails.css";

export default function MovieDetails({ movie }) {
  return (
    <div className="movie-details-container">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
}
