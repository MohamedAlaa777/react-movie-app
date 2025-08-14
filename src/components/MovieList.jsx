import MovieCard from "./MovieCard";

import React from 'react'

function MovieList({movies}) {
  return (
    <div className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </div>
  )
}

export default MovieList
