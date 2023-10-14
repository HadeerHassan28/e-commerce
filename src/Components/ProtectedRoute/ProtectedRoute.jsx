import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./ProtectedRoute.module.css";

const ProtectedRoute = ({ children }) => {
  // console.log(children);
  if (localStorage.getItem("userToken") == null)
    return <Navigate to={"/login"} />; //Navigate to login;
  else return children; //navigate to selected page
};

export default ProtectedRoute;
