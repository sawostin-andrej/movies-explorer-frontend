import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-page">
              <Link
                className="footer__nav-link"
                to="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className="footer__nav-page">
              <Link
                className="footer__nav-link"
                to="https://github.com/sawostin-andrej"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
