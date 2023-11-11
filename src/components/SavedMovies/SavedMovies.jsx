import React from "react";
import { useState, useEffect, useCallback } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ savedMovies, handleCardDelete }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isCheckboxActive, setCheckboxActive] = useState(false);

  const filterMovies = useCallback((search, isCheckboxActive, movies) => {
    setSearchInput(search);
    setFilteredMovies(
      movies.filter((movie) => {
        const searchText = movie.nameRU
          .toLowerCase()
          .includes(search.toLowerCase());
        return isCheckboxActive
          ? searchText && movie.duration <= 40
          : searchText;
      })
    );
  }, []);

  function handleMovies(search) {
    filterMovies(search, isCheckboxActive, savedMovies);
  }

  function toggleCheckbox() {
    if (isCheckboxActive) {
      setCheckboxActive(false);
      filterMovies(searchInput, false, savedMovies);
    } else {
      setCheckboxActive(true);
      filterMovies(searchInput, true, savedMovies);
    }
  }

  useEffect(() => {
    filterMovies(searchInput, isCheckboxActive, savedMovies);
  }, [filterMovies, savedMovies, isCheckboxActive, searchInput]);

  return (
    <main>
      <SearchForm
        savedMovies={savedMovies}
        searchInput={searchInput}
        isCheckboxActive={isCheckboxActive}
        handleMovies={handleMovies}
        toggleCheckbox={toggleCheckbox}
      />
      <MoviesCardList
        handleCardDelete={handleCardDelete}
        filteredMovies={filteredMovies}
      />
    </main>
  );
}
