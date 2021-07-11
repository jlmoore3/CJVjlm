import React from "react";

const Register = (props) => {
  return (
    <div className="row">
      <div className="login-wrapper">
        <form>
          <div className="col-sm">
            <label htmlFor="Username">
              <input
                type="text"
                placeholder="Username"
                onChange={({ target }) =>
                  sessionStorage.setItem("Username", { target })
                }
              />
            </label>
          </div>
          <div className="col-sm">
            <label htmlFor="Password">
              <input
                type="password"
                placeholder="Password"
                onChange={({ target }) =>
                  sessionStorage.setItem("Password", { target })
                }
              />
            </label>
          </div>
          <div className="col-sm">
            <label htmlFor="FirstName">
              <input
                type="text"
                placeholder="First Name"
                onChange={({ target }) =>
                  sessionStorage.setItem("FirstName", { target })
                }
              />
            </label>
          </div>
          <div className="col-sm">
            <label htmlFor="Surname">
              <input
                type="text"
                placeholder="Surname"
                onChange={({ target }) =>
                  sessionStorage.setItem("Surname", { target })
                }
              />
            </label>
          </div>
          <div className="col-sm">
            <label htmlFor="Email">
              <input
                type="text"
                placeholder="Email Address"
                onChange={({ target }) =>
                  sessionStorage.setItem("Email", { target })
                }
              />
            </label>
          </div>
          <div className="col-sm">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => props.setUser(true)}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
