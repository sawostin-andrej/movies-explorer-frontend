import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

function MainPage({ isLoggedIn, setIsLoggedIn }) {
  useEffect(() => {
    setIsLoggedIn(false);
  })
  return (
    <>
      <Header loggedIn={isLoggedIn} />
      <Main />
      <Footer />
    </>
  );
}

export default MainPage;
