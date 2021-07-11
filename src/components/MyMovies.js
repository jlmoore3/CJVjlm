import React from "react";
import Movie from "./Movie";
import Genres from "./Genres.js";
import MovieContext from "../context/MovieContext.js";
import { useContext } from "react";

const MyMovies = () => {
  const { movies, savedMovies, addSaved } = useContext(MovieContext);

  const MyMovieList = movies
    .filter((movie) => {
      console.log(savedMovies);
      savedMovies.forEach((element) => {
        if (movie.id === element) {
          return movie;
        } else {
          return null;
        }
      });
    })
    .map((movie) => (
      <>
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.Title}
          description={movie.Plot}
          poster={movie.Poster}
          genre={movie.Genre}
          addSaved={addSaved}
        />
      </>
    ));

  return (
    <div className="row">
      {MyMovieList}
      {savedMovies}
      {true && (
        <>
          <h1>No Movies Saved</h1>
          <p>Browse by Genre:</p>
          <Genres />
        </>
      )}
    </div>
  );
};
export default MyMovies;
