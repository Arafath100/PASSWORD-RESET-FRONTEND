import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://password-reset-flow-task-guvi.onrender.com/api/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        toast.success("Password reset link sent to your email");
      } else {
        toast.error("Failed to reset password");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <hr />
      <div className="container form-container text-white fw-bold ">
        <hr />
        <h1 className="text-center text-uppercase bg-info bg-opacity-10 border border-info rounded">
          Forgot Password
        </h1>
        <hr />
        <form onSubmit={handleReset}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter the Email to Reset Password"
            />
          </div>
          <br />
          <div className="text-center">
            <button type="submit" className="btn w-50 btn-submit btn-outline-primary">
              Reset Password
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
