import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === "/" ? "header_type_background" : ""
      }`}
    >
      <div className="header__container">
        <Link className="header__link" to="/">
          <img className="header__logo" src={logo} alt="лого" />
        </Link>
        {isLoggedIn ? (
          <Navigation />
        ) : (
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__page">
                <Link className="header__link" to="/signup">
                  Регистрация
                </Link>
              </li>
              <li className="header__page">
                <Link
                  className="header__link header__link_type_login"
                  to="/signin"
                >
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
