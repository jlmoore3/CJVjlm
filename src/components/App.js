import "../App.css";
import Movies from "./Movies.js";
import MoviePage from "./MoviePage.js";
import Navmenu from "./Navmenu.js";
import Genres from "./Genres.js";
import Footer from "./Footer.js";
import Login from "./Login";
import Register from "./Register";
import MyMovies from "./MyMovies";
import NotFound from "./NotFound";
import axios from "axios";
import FeaturedMovies from "./FeaturedMovies";
import MovieContext from "../context/MovieContext.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("/api/movies")
      .then((json) => {
        console.log(`movies ${json.headers}`);
        setMovies(json);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  });
  const [user, setUser] = useState();
  window.sessionStorage.setItem("loggedIn", false);
  useEffect(() => {
    let status = window.sessionStorage.getItem("loggedIn");
    setUser(status);
    console.log(`user ${user}`);
  }, []);
  const [savedMovies, setSaved] = useState([]);

  const addSaved = (movie) => {
    localStorage.setItem("MyList", JSON.stringify([...savedMovies, movie]));
    if (savedMovies.includes(movie)) {
      console.log(`Already saved. Faves: ${savedMovies}`);
    } else if (!savedMovies.includes(movie)) {
      setSaved([...savedMovies, movie]);
      console.log(`Faves: ${savedMovies.length}`);
    }
  };

  const removeSaved = (movie) => {
    localStorage.removeItem("MyList", JSON.stringify([...savedMovies, movie]));
    if (savedMovies.includes(movie)) {
      console.log(`${savedMovies}`);
    } else if (!savedMovies.includes(movie)) {
      console.log(`Faves: ${savedMovies.length}`);
    }
  };

  return (
    <div className="App">
      <MovieContext.Provider
        value={{ movies, savedMovies, addSaved, removeSaved }}
      >
        <Router>
          <Switch>
            <header>
              <div className="header-fw">
                <Navmenu
                  setUser={setUser}
                  user={user}
                  savedMovies={savedMovies}
                />
                <Route exact path="/" component={FeaturedMovies} />
                {!user && <Login user={user} setUser={setUser} />}
              </div>
            </header>
          </Switch>
          <div className="container">
            <Switch>
              {user && (
                <>
                  <Route
                    exact
                    path="/"
                    component={Movies}
                    addSaved={addSaved}
                  />
                  <Route exact path="/mymovies" component={MyMovies} />
                  <Route exact path="/genres" component={Genres} />
                  <Route exact path="/:id" component={MoviePage} />
                  <Route exact path="/?search" component={Movies} />
                </>
              )}
            </Switch>
          </div>
          <Switch>
            <Route path="/register" component={Register} setUser={setUser} />
            <Route path="/" component={Footer} />
          </Switch>
          <Route component={NotFound} />
        </Router>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
