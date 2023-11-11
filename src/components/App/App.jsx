import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import MainPage from "../../pages/Main";
import MoviesPage from "../../pages/Movies";
import SavedMoviesPage from "../../pages/SavedMovies";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";
import ProfilePage from "../../pages/Profile";
import NotFound from "../../pages/NotFound";
import NotificationPopup from "../NotificationPopup/NotificationPopup";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import * as mainApi from "../../utils/MainApi";

import {
  HTTP_UNAUTHORIZED,
  HTTP_UNAUTHORIZED_TEXT,
  HTTP_CONFLICT,
  HTTP_CONFLICT_TEXT,
  HTTP_SERVER_ERROR,
  HTTP_SERVER_ERROR_TEXT,
} from "../../utils/errors";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoPopup, setIsInfoPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isInfoPopupText, setIsInfoPopupText] = useState("");

  useEffect(() => {
    if (localStorage.token) {
      Promise.all([
        mainApi.getUserInfo(localStorage.token),
        mainApi.getSavedMovies(localStorage.token),
      ])
        .then(([userInfo, dataMovies]) => {
          setCurrentUser(userInfo);
          setSavedMovies(dataMovies);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    handleCheckToken();
  }, []);

  function handleCheckToken() {
    const jwt = localStorage.getItem("token");

    if (jwt)
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser(res);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch((err) =>
          console.log(`При проверке токена возникла ошибка: ${err}`)
        );
  }

  useEffect(() => {
    setTimeout(() => {
      setIsInfoPopup(false);
    }, 2200);
  }, [isInfoPopup]);

  function handleRegister(name, email, password) {
    setIsLoading(true);
    setIsError(true);
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res) handleLogin(email, password);
        setIsInfoPopup(true);
        setIsLoggedIn(false);
        setIsLoading(false);
        setIsError(true);
        setIsInfoPopupText("Регистрация успешно выполнена. Добро пожаловать!");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(`Возникла ошибка: ${err}`);
        if (err === HTTP_CONFLICT) {
          setError(HTTP_CONFLICT_TEXT);
        } else if (err === HTTP_SERVER_ERROR) {
          setError(HTTP_SERVER_ERROR_TEXT);
        } else {
          setError("Произошла ошибка при регистрации пользователя.");
        }
      });
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("token", res.token);
        navigate("/movies");
        setIsInfoPopup(true);
        setIsLoading(false);
        setIsError(true);
        setIsInfoPopupText(
          "Вход в аккаунт успешно выполнен. Добро пожаловать!"
        );
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(`Возникла ошибка: ${err}`);
        if (err === HTTP_UNAUTHORIZED) {
          setError(HTTP_UNAUTHORIZED_TEXT);
        } else if (err === HTTP_SERVER_ERROR) {
          setError(HTTP_SERVER_ERROR_TEXT);
        } else {
          setError("Произошла ошибка при авторизации.");
        }
      });
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    mainApi
      .editUserInfo(data, localStorage.token)
      .then((res) => {
        setCurrentUser(res);
        setIsInfoPopup(true);
        setIsLoading(false);
        setIsEdit(false);
        setIsError(true);
        setIsInfoPopupText("Данные успешно сохранены!");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(`Возникла ошибка: ${err}`);
        if (err === HTTP_CONFLICT) {
          setError(HTTP_CONFLICT_TEXT);
        } else if (err === HTTP_SERVER_ERROR) {
          setError(HTTP_SERVER_ERROR_TEXT);
        } else {
          setError("Произошла ошибка при обновлении данных.");
        }
      });
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  }

  function handleCardDelete(film) {
    mainApi
      .deleteMovie(film, localStorage.token)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== film;
          })
        );
      })
      .catch((err) => {
        console.log(`При удалении фильма произошла ошибка ${err}`);
      });
  }

  function handleCardAdd(movie) {
    const isSaveMovie = savedMovies.some(
      (element) => movie.id === element.movieId
    );

    const clickFilm = savedMovies.filter((film) => {
      return film.movieId === movie.id;
    });

    if (isSaveMovie) {
      handleCardDelete(clickFilm[0]._id);
    } else {
      mainApi
        .createMovie(movie, localStorage.token)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })

        .catch((err) => {
          console.log(`При сохранении карточки произошла ошибка ${err}`);
        });
    }
  }

  function closePopupSuccess() {
    setIsInfoPopup(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={
                    <MoviesPage
                      isLoggedIn={isLoggedIn}
                      isLoading={isLoading}
                      savedMovies={savedMovies}
                      handleCardAdd={handleCardAdd}
                    />
                  }
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={
                    <SavedMoviesPage
                      isLoggedIn={isLoggedIn}
                      handleCardDelete={handleCardDelete}
                      savedMovies={savedMovies}
                    />
                  }
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={
                    <ProfilePage
                      isLoggedIn={isLoggedIn}
                      isLoading={isLoading}
                      handleUpdateUser={handleUpdateUser}
                      isEdit={isEdit}
                      setIsEdit={setIsEdit}
                      handleLogout={handleLogout}
                      error={error}
                      setError={setError}
                    />
                  }
                />
              }
            />
            <Route
              path="/signup"
              element={
                isLoggedIn && location.pathname === "/signup" ? (
                  navigate("/movies")
                ) : (
                  <RegisterPage
                    handleRegister={handleRegister}
                    isLoading={isLoading}
                    error={error}
                    setError={setError}
                  />
                )
              }
            />
            <Route
              path="/signin"
              element={
                isLoggedIn && location.pathname === "/signin" ? (
                  navigate("/movies")
                ) : (
                  <LoginPage
                    handleLogin={handleLogin}
                    isLoading={isLoading}
                    error={error}
                    setError={setError}
                  />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <NotificationPopup
          isOpen={isInfoPopup}
          onClose={closePopupSuccess}
          isError={isError}
          error={isInfoPopupText}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
