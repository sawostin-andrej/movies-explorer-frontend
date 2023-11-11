import SavedMovies from "../components/SavedMovies/SavedMovies";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function SavedMoviesPage({ isLoggedIn, savedMovies, handleCardDelete }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SavedMovies
        savedMovies={savedMovies}
        handleCardDelete={handleCardDelete}
      />
      <Footer />
    </>
  );
}

export default SavedMoviesPage;
