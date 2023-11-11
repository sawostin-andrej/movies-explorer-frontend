import { Link } from "react-router-dom";
import "./AuthForm.css";
import logo from "../../images/logo.svg";
import Form from "../Form/Form.jsx";
import Button from "../Button/Button.jsx";

const AuthForm = ({
  title,
  onSubmit,
  name,
  children,
  textButton,
  textUnderButton,
  textLink,
  path,
  isLoginForm,
  isLoading,
  isValid,
  isValidLogin,
  error,
  errorLogin,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="form">
      <Link className="form__link form__link_type_logo" to="/">
        <img className="form__logo" src={logo} alt="лого"></img>
      </Link>
      <h1 className="form__heading">{title}</h1>
      <Form
        className="form__auth"
        onSubmit={(e) => handleSubmit(e)}
        name={name}
      >
        {children}
        <div
          className={`form__container ${
            isLoginForm ? "form__container_type_login" : ""
          }`}
        >
          <p
            className={`form__error ${
              isLoginForm ? "form__error_type_login" : ""
            }`}
          >
            {isLoginForm ? errorLogin : error}
          </p>
          <Button
            className={`form__button ${
              isLoginForm ? "form__button_type_login" : ""
            }`}
            type="submit"
            text={textButton}
            disabled={(isLoginForm ? !isValidLogin : !isValid) || isLoading}
          />
          <p className="form__text">
            {textUnderButton}{" "}
            <Link className="form__link" to={path}>
              {textLink}
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default AuthForm;
