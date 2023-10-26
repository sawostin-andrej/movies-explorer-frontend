import React from "react";
import "./Portfolio.css";
import photo from "../../images/strelka.svg"

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a
            href="https://github.com/sawostin-andrej/how-to-learn"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__name">Статичный сайт</p>
            <img className="portfolio__link-cursor" src={photo} alt="стрелка"></img>
          </a>
        </li>
        <li className="portfolio__element">
          <a
            href="https://github.com/sawostin-andrej/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__name">Адаптивный сайт</p>
            <img className="portfolio__link-cursor" src={photo} alt="стрелка"></img>
          </a>
        </li>
        <li className="portfolio__element">
          <a
            href="https://github.com/sawostin-andrej/mesto"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__name">Одностраничное приложение</p>
            <img className="portfolio__link-cursor" src={photo} alt="стрелка"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}
