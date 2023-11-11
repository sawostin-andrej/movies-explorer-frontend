import "./MoviesCard.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import counterMovieTime from "../../utils/counterMovieTime";

export default function MoviesCard({
  movie,
  savedMovies,
  handleCardAdd,
  handleCardDelete,
}) {
  const { pathname } = useLocation();
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    if (pathname === "/movies")
      setIsSave(savedMovies.some((element) => movie.id === element.movieId));
  }, [savedMovies, movie.id, setIsSave, pathname]);

  function handleSaveClick() {
    if (savedMovies.some((element) => movie.id === element.movieId)) {
      setIsSave(true);
      handleCardAdd(movie);
    } else {
      setIsSave(false);
      handleCardAdd(movie);
    }
  }

  return (
    <li
      className={
        pathname === "/movies"
          ? "movies__card movies__card_type_movies"
          : "movies__card movies__card_type_saved-movies"
      }
    >
      <a
        className="movies__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies__image"
          src={
            pathname === "/movies"
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          alt={movie.nameRU}
        ></img>
      </a>
      {pathname === "/movies" ? (
        <Button
          className={`movies__button-save ${
            isSave
              ? "movies__button-save_type_saved"
              : "movies__button-save_type_save"
          }`}
          type="button"
          text={!isSave && "Сохранить"}
          onClick={handleSaveClick}
        />
      ) : (
        <Button
          className="movies__button-save movies__button-save_type_delete"
          type="button"
          onClick={() => handleCardDelete(movie._id)}
        />
      )}
      <div className="movies__container-title">
        <h2 className="movies__title">{movie.nameRU}</h2>
        <div className="movies__container-time">
          <p className="movies__time">{counterMovieTime(movie.duration)}</p>
        </div>
      </div>
    </li>
  );
}
