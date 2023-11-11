/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm.jsx";
import Input from "../Input/Input.jsx";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Login({ handleLogin, error, setError, isLoading }) {
  const initialValues = {
    "input-email": "",
    "input-password": "",
  };

  const validationRules = {
    "input-email": [
      {
        regex: /^(?!\s*$).+/,
        message: "Поле обязательно для заполнения.",
      },
      {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message:
          "Поле может содержать адрес электронной почты (например, test@test.test).",
      },
    ],
    "input-password": [
      {
        regex: /^(?!\s*$).+/,
        message: "Поле обязательно для заполнения.",
      },
      {
        regex: /^.{8,}$/,
        message: "Пароль должен содержать минимум 8 символов.",
      },
    ],
  };

  const { handleChange, values, errors, isValid } = useFormWithValidation(
    initialValues,
    validationRules
  );

  useEffect(() => {
    return () => {
      setError("");
    };
  }, []);

  return (
    <main>
      <AuthForm
        title="Рады видеть!"
        name="login"
        onSubmit={() =>
          handleLogin(values["input-email"], values["input-password"])
        }
        textButton="Войти"
        textUnderButton="Ещё не зарегистрированы?"
        textLink="Регистрация"
        path="/signup"
        isLoginForm={true}
        isValidLogin={isValid}
        errorLogin={error}
        isLoading={isLoading}
      >
        <Input
          classNameInput={`form__input ${
            errors["input-email"] && "form__input_type_error"
          }`}
          classNameLabel="form__label"
          label="E-mail"
          type="email"
          name="input-email"
          placeholder="E-mail"
          required="required"
          value={values["input-email"]}
          onChange={(e) => handleChange(e)}
        >
          <span className="form__error">{errors["input-email"]}</span>
        </Input>
        <Input
          classNameInput={`form__input ${
            errors["input-password"] && "form__input_type_error"
          }`}
          classNameLabel="form__label"
          label="Пароль"
          type="password"
          name="input-password"
          placeholder="Пароль"
          required="required"
          value={values["input-password"]}
          onChange={(e) => handleChange(e)}
        >
          <span className="form__error">{errors["input-password"]}</span>
        </Input>
      </AuthForm>
    </main>
  );
}
