import React from "react";
import MovieContext from "../context/MovieContext.js";
import { useContext } from "react";
import Ratings from "./Ratings.js";
import { Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { movies, savedMovies, addSaved } = useContext(MovieContext);
  const thisMovie = useParams();

  return (
    <div className="movie-body">
      {movies
        .filter((movie) => movie.id === thisMovie.id)
        .map((MyCurrentMovie) => (
          <>
            <div className="row">
              <div className="col-md">
                <img
                  className="featured-image-full"
                  src={MyCurrentMovie.Poster}
                  alt={MyCurrentMovie.Title}
                />
              </div>
              <div className="col-md">
                <h1 className="movie-title">
                  {MyCurrentMovie.Title} ({MyCurrentMovie.Year})
                </h1>
                <p>{MyCurrentMovie.Plot}</p>

                <p>Starring: {MyCurrentMovie.Actors}</p>
                <p>Runtime: {MyCurrentMovie.Runtime}</p>
                <p>Rated: {MyCurrentMovie.Rated}</p>

                <div className="button-group">
                  <Nav.Link href={`/watch/${MyCurrentMovie.id}`}>
                    <Button variant="primary">
                      Rent: {MyCurrentMovie.RentPrice}
                    </Button>
                  </Nav.Link>
                  <Nav.Link href={`/watch/${MyCurrentMovie.id}`}>
                    <Button variant="primary">
                      Buy: {MyCurrentMovie.BuyPrice}
                    </Button>
                  </Nav.Link>
                  {!savedMovies.includes(MyCurrentMovie.id) ? (
                    <Button
                      variant="secondary"
                      onClick={() => {
                        addSaved(MyCurrentMovie.id);
                      }}
                    >
                      Save
                    </Button>
                  ) : (
                    <Nav.Link href={`/mymovies`}>
                      <Button>See My List</Button>
                    </Nav.Link>
                  )}
                </div>
                {MyCurrentMovie.Ratings.map((rating) => (
                  <Ratings Source={rating.Source} Value={rating.Value} />
                ))}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default MoviePage;
