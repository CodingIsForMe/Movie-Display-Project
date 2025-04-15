import React from "react";
import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MainContext";

export default function Favourites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appear here!</p>
      </div>
    );
  }
}
