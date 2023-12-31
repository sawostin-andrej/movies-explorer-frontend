import SavedMovies from "../components/SavedMovies/SavedMovies";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function SavedMoviesPage({ isLoggedIn }) {
  return (
    <>
      <Header loggedIn={isLoggedIn} />
      <main>
        <SavedMovies />
      </main>
      <Footer />
    </>
  );
}

export default SavedMoviesPage;
