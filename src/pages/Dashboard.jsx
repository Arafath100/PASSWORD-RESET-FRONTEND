import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Dashboard = () => {
  const navigate = useNavigate(); // Accesses the navigation object for routing
  const [userData, setUserData] = useState(null); // State to store user data received from the API
  const userName = localStorage.getItem("userName"); // Retrieves the userName from localStorage

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieves the token from localStorage

    if (!token) {
      navigate("/login");
    } else {
      axios
        .get(
          "https://password-reset-flow-task-guvi.onrender.com/api/protected-route",
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          setUserData(response.data);
          console.log(response);
        })
        .catch((error) => {
          toast.error("Failed to fetch user data");
          navigate("/login");
        });
    }
  }, [navigate]);

  return (
    <div>
      <hr />
      <div className="container form-container text-center">
        <hr />
        <h1 className="text-white text-center text-uppercase bg-info bg-opacity-10 border border-info rounded">
          Dashboard
        </h1>
        <div className="card">
          <div className="card-body fw-bold">
            {userData ? (
              <div>
                <h4 className="mb-3" id="heading">
                  Welcome {userName}😻
                </h4>
                <hr />
                <p className="card-text">User ID: {userData.user.userId}</p>
                <p className="card-text">User Email: {userData.user.email}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
