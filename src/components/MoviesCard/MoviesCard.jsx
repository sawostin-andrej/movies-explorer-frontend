import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MoviesCard.css";
import Button from "../Button/Button";

export default function MoviesCard({ image, name, isSave, time }) {
  const location = useLocation();

  const handleMovieSaved = () => {};

  return (
    <li className="movie">
      <Link
        className="movie__link"
        to="https://www.youtube.com/watch?v=0TFNB6VLwag"
        target="_blanck"
        rel="noreferrer"
      >
        <img className="movie__image" src={image} alt={name}></img>
      </Link>
      {location.pathname === "/saved-movies" ? (
        <Button
          type="button"
          className="movie__save-button movie__save-button_type_delete"
        ></Button>
      ) : (
        <Button
          type="button"
          className={
            isSave
              ? "movie__save-button movie__save-button_type_save"
              : "movie__save-button movie__save-button_type_saved"
          }
          onClick={handleMovieSaved}
        >
          Сохранить
        </Button>
      )}
      <div className="movie__info">
        <h2 className="movie__name">{name}</h2>
        <div className="movie__container-time">
          <p className="movie__time">{time}</p>
        </div>
      </div>
    </li>
  );
}
