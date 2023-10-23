import React from "react";
import "./NavPage.css";
import { Link } from "react-scroll";

export default function NavPage() {
  return (
    <nav className="nav-page">
      <ul className="nav-page__list">
        <li>
          <Link className="nav-page__link" to="about-project">
            О проекте
          </Link>
        </li>
        <li>
          <Link className="nav-page__link" to="techs">
            Технологии
          </Link>
        </li>
        <li>
          <Link className="nav-page__link" to="about-me">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}
