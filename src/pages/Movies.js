import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";

function MoviesPage({
  isLoggedIn,
  handleCardDelete,
  isLoading,
  handleCardAdd,
  savedMovies,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Movies
        isLoading={isLoading}
        handleCardAdd={handleCardAdd}
        savedMovies={savedMovies}
        handleCardDelete={handleCardDelete}
      />
      <Footer />
    </>
  );
}

export default MoviesPage;
