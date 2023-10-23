import React from "react";
import "./Portfolio.css";

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
            <p className="portfolio__link-cursor">↗</p>
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
            <p className="portfolio__link-cursor">↗</p>
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
            <p className="portfolio__link-cursor">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
