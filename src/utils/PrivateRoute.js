import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { checkAuth } from "./checkAuth";

function PrivateRoute({ children }) {
  const auth = checkAuth();
  const location = useLocation(); // <-- get current location being accessed
  return auth ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }} // <-- pass in route state
      replace
    />
  );
}

export default PrivateRoute;
