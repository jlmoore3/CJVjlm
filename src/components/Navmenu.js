import React from "react";
import logo from "../logo.svg";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
const Navmenu = (props) => {
  return (
    <>
      <Navbar className="navbar nobr">
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/genres">Genres</Nav.Link>
          <Nav.Link href="/mymovies">
            My List{" "}
            {props.savedMovies.length > 0 && `(${props.savedMovies.length})`}
          </Nav.Link>
        </Nav>
        <div className="search-bar">
          {!props.user && (
            <>
              <Nav.Link href="/register">
                <button className="btn btn-primary registration" type="submit">
                  Register
                </button>
              </Nav.Link>
            </>
          )}
          {props.user && (
            <>
              <Form action="/" method="get">
                <FormControl
                  type="text"
                  id="nav-search"
                  placeholder="Search Movies"
                  name="search"
                />
                <Button type="submit">Go!</Button>
              </Form>
              <Nav.Link href="/">
                <button
                  className="btn btn-secondary logout"
                  type="submit"
                  onClick={() =>
                    props.setUser(
                      window.sessionStorage.setItem("loggedIn", false)
                    )
                  }
                >
                  Logout
                </button>
              </Nav.Link>
            </>
          )}
        </div>
      </Navbar>
    </>
  );
};

export default Navmenu;
