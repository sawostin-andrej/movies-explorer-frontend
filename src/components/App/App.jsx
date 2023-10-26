import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/Main";
import MoviesPage from "../../pages/Movies";
import SavedMoviesPage from "../../pages/SavedMovies";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";
import ProfilePage from "../../pages/Profile";
import NotFound from "../../pages/NotFound";

import {
  ProtectedRouteAuthorizedUser,
  ProtectedRouteUnauthorizedUser,
} from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route
          path="/movies"
          element={
            <ProtectedRouteUnauthorizedUser
              isLoggedIn={isLoggedIn}
              element={<MoviesPage isLoggedIn={isLoggedIn} />}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRouteUnauthorizedUser
              isLoggedIn={isLoggedIn}
              element={<SavedMoviesPage isLoggedIn={isLoggedIn} />}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRouteAuthorizedUser
              isLoggedIn={isLoggedIn}
              element={<RegisterPage />}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRouteAuthorizedUser
              isLoggedIn={isLoggedIn}
              element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouteUnauthorizedUser
              isLoggedIn={isLoggedIn}
              element={
                <ProfilePage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
