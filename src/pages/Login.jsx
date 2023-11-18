import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://password-reset-flow-task-guvi.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        const { token, userName } = data;

        localStorage.setItem("token", token);
        localStorage.setItem("userName", userName);

        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div>
      <hr />
      <div className="container form-container text-white fw-bold ">
        <hr />
        <h1 className="text-center text-uppercase bg-info bg-opacity-10 border border-info rounded">
          Login
        </h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <br />
          <div className="text-center">
            <button
              type="submit"
              className="btn w-50 fw-bold  btn-outline-primary btn-submit"
            >
              LOGIN
            </button>
            <p className="mt-3">
              <h5>
                <span
                  className="text-danger fw-bold text-uppercase"
                  style={{ cursor: "pointer" }}
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </span>
              </h5>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
