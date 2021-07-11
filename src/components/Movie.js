import React from "react";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Nav, Button, Card } from "react-bootstrap";

const Movie = (props) => {
  const { addSaved, savedMovies } = useContext(MovieContext);
  return (
    <Card className="col-sm-3">
      <Card.Body>
        <div className="card-poster">
          <img src={props.poster} alt={props.title} />
        </div>
        <div className="movie-card">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <h6>
              <em>{props.genre}</em>
            </h6>
            {props.description.slice(0, 140)}
            {props.description.length >= 140 && `...`}
          </Card.Text>
          <div className="col-sm-12 button-group">
            <Nav.Link href={`/${props.id}`}>
              <Button variant="primary">Watch</Button>
            </Nav.Link>

            {!savedMovies.includes(props.id) ? (
              <Button
                variant="secondary"
                onClick={() => {
                  addSaved(props.id);
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
        </div>
      </Card.Body>
    </Card>
  );
};

export default Movie;
