import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { checkAdmin, checkAuth } from "./checkAuth";

function RestrictedRoute({ children }) {
  const auth = checkAuth();
  const admin = checkAdmin();
  const location = useLocation(); // <-- get current location being accessed
  return auth && admin ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }} // <-- pass in route state
      replace
    />
  );
}

export default RestrictedRoute;
