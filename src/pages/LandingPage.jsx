import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/* <br /> */}
      <hr />
      <div
        className="container text-center text-white fw-bold"
        id="container"
      >
        <hr />
        <div>
          <h1 className="text-uppercase  bg-info bg-opacity-10 border border-info rounded">Welcome to Password Reset App</h1><hr />
          <p className="lead">
            Experience enhanced security in password management.
          </p>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <h3>Already Have an Account?</h3>
            <Link
              to="/login"
              className="btn btn-outline-info btn-lg mt-3 text-uppercase"
            >
              Log In
            </Link>
          </div>
          <div className="col-md-6">
            <h3>New to Password Reset?</h3>
            <Link
              to="/signup"
              className="btn btn-outline-success btn-lg mt-3 text-uppercase"
            >
              Sign Up
            </Link>
          </div>
          <br />
        </div>
        <br />
      </div>
    </div>
  );
};

export default LandingPage;
