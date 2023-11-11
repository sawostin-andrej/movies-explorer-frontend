import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import Button from "../Button/Button";
import MoviesCard from "../MoviesCard/MoviesCard";

import {
  DESKTOP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  MOBILE_SCREEN_WIDTH,
} from "../../utils/constants";
import widthMovies from "../../utils/widthMovies";

export default function MoviesCardList({
  isLoading,
  filteredMovies,
  savedMovies,
  serverError,
  handleCardDelete,
  searchInput,
  handleCardAdd,
}) {
  const { pathname } = useLocation();
  const [isQuantityMovies, setNumberMovies] = useState("");
  const movies = filteredMovies.slice(0, isQuantityMovies);

  useEffect(() => {
    if (pathname === "/movies") {
      setNumberMovies(widthMovies().cards);

      function resizeWidthMovies() {
        if (window.innerWidth >= DESKTOP_SCREEN_WIDTH) {
          setNumberMovies(widthMovies().cards);
        }
        if (window.innerWidth < DESKTOP_SCREEN_WIDTH) {
          setNumberMovies(widthMovies().cards);
        }
        if (window.innerWidth < TABLET_SCREEN_WIDTH) {
          setNumberMovies(widthMovies().cards);
        }
        if (window.innerWidth < MOBILE_SCREEN_WIDTH) {
          setNumberMovies(widthMovies().cards);
        }
      }
      window.addEventListener("resize", resizeWidthMovies);
      return () => window.removeEventListener("resize", resizeWidthMovies);
    }
  }, [pathname, filteredMovies]);

  function handleAddButtonClick() {
    setNumberMovies(isQuantityMovies + widthMovies().add);
  }

  return (
    <section className="movies" aria-label="фильмы">
      <ul className="movies__card-pages">
        {isLoading ? (
          <Preloader />
        ) : pathname === "/movies" && movies.length !== 0 ? (
          movies.map((movie) => {
            return (
              <MoviesCard
              handleCardAdd={handleCardAdd}
                savedMovies={savedMovies}
                movie={movie}
                key={movie.id}
              />
            );
          })
        ) : filteredMovies.length !== 0 ? (
          filteredMovies.map((movie) => {
            return (
              <MoviesCard
                key={movie._id}
                movie={movie}
                handleCardDelete={handleCardDelete}
              />
            );
          })
        ) : serverError ? (
          <span className="movies__error-card">
            «Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз»
          </span>
        ) : pathname === "/movies" && searchInput.length === 0 ? (
          <span className="movies__error-card">
            «Для получения списка фильмов выполните поиск»
          </span>
        ) : pathname === "/movies" ? (
          <span className="movies__error-card">«Ничего не найдено»</span>
        ) : (
          <span className="movies__error-card">«Нет сохраненных фильмов»</span>
        )}
      </ul>

      {pathname === "/movies" && (
        <Button
          className={`movies__button ${
            isQuantityMovies >= filteredMovies.length &&
            "movies__invisible_button"
          }`}
          onClick={handleAddButtonClick}
          type="button"
        >
          Ещё
        </Button>
      )}
    </section>
  );
}
