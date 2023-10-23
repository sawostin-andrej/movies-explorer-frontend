import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainPage({ isLoggedIn }) {
  return (
    <>
      <Header loggedIn={isLoggedIn} />
      <Main />
      <Footer />
    </>
  );
}

export default MainPage;