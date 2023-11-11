import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({
  handleMovies,
  searchInput,
  savedMovies,
  toggleCheckbox,
  isCheckboxActive,
}) => {
  const { pathname } = useLocation();

  const initialValues = {
    search: "",
  };

  const validationRules = {
    search: [
      {
        message: "Нужно ввести ключевое слово.",
      },
    ],
  };

  const { values, handleChange, errors, resetForm } = useFormWithValidation(
    initialValues,
    validationRules
  );

  function handleMoviesSubmit(evt) {
    evt.preventDefault();
    handleMovies(evt.target.search.value);
  }

  useEffect(() => {
    if (pathname === "/saved-movies" && savedMovies.length === 0) {
      resetForm({ search: "" });
    } else {
      resetForm({ search: searchInput });
    }
  }, [searchInput, resetForm, pathname, savedMovies]);

  return (
    <section className="search" aria-label="поиск фильмов">
      <form className="search__form" onSubmit={handleMoviesSubmit} noValidate>
        <div className="search__container">
          <div className="search__container-input">
            <div className="search__icon"></div>
            <input
              className="search__input"
              type="text"
              name="search"
              placeholder="Фильм"
              required
              minLength="1"
              value={values.search || ""}
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
            <button
              className={`search__button ${
                savedMovies
                  ? pathname === "/saved-movies" && savedMovies.length === 0
                  : ""
              }`}
              type="submit"
            >
              Найти
            </button>
          </div>
          <FilterCheckbox
            toggleCheckbox={toggleCheckbox}
            isCheckboxActive={isCheckboxActive}
          />
        </div>
        <p className="search__error">{errors.search || ""}</p>
      </form>
    </section>
  );
};

export default SearchForm;
