import React from "react";
import Promo from "../Promo/Promo";
import NavPage from "../NavPage/NavPage";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

const Main = () => {
  return (
    <main className="content">
      <Promo />
      <NavPage />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
