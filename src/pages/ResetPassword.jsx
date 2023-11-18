import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
  });
  const navigate = useNavigate(); // Access the navigation object for routing
  const { token } = useParams(); // Get the token from the URL params

  // Update form data when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for password reset
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://password-reset-flow-task-guvi.onrender.com/api/reset-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, token }),
        }
      );

      if (response.ok) {
        toast.success("Password reset successful");
        navigate("/login");
      } else {
        toast.error("Password reset failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <hr />
      <div className="container form-container text-white fw-bold">
        <hr />
        <h1 className="text-center">Reset Password</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="newPassword"
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn w-50 btn-submit btn-outline-primary"
            >
              Submit
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
