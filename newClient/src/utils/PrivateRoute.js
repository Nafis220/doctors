import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AdminPanel from "../pages/adminPanel";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cookie = () => {
      try {
        const cookieValue = localStorage.getItem("token");
        const parts = cookieValue.split(".");

        // Decode the payload (the second part of the JWT)
        const decodedPayload = JSON.parse(atob(parts[1]));

        const checkRole = decodedPayload.role;

        setRole(checkRole);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    cookie();
  }, []);
  console.log(role);
  if (loading) {
    // Render a loading indicator if the role is still being determined
    return <div>Loading...</div>;
  }

  if (role === "admin") {
    return <AdminPanel />;
  } else {
    // Redirect to login page if the user is not an admin
    navigate("/login");
    return null; // Render nothing for non-admin users
  }
};

export default PrivateRoute;
