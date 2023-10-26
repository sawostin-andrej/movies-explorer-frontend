import { Navigate } from "react-router-dom";

export const ProtectedRouteAuthorizedUser = ({ isLoggedIn, element }) => {
  return !isLoggedIn ? element : <Navigate to="/movies" replace />;
};

export const ProtectedRouteUnauthorizedUser = ({ isLoggedIn, element }) => {
  return isLoggedIn ? element : <Navigate to="/" replace />;
};
