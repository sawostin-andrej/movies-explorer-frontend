/* eslint-disable react-hooks/exhaustive-deps */
import AuthForm from "../AuthForm/AuthForm.jsx";
import Input from "../Input/Input.jsx";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { useEffect } from "react";

export default function Register({
  handleRegister,
  error,
  setError,
  isLoading,
}) {
  const initialValues = {
    "input-name": "",
    "input-email": "",
    "input-password": "",
  };

  const validationRules = {
    "input-name": [
      {
        regex: /^(?!\s*$).+/,
        message: "Поле обязательно для заполнения.",
      },
      {
        regex: /^[A-Za-zА-Яа-я\s-]+$/,
        message:
          "Поле может содержать только латиницу, кириллицу, пробел или дефис.",
      },
      {
        regex: /^.{2,30}$/,
        message: "Поле должно содержать от 2 до 30 символов.",
      },
    ],
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

  const { values, handleChange, errors, isValid } = useFormWithValidation(
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
        title="Добро пожаловать!"
        name="register"
        textButton="Зарегистрироваться"
        textUnderButton="Уже зарегистрированы?"
        onSubmit={() =>
          handleRegister(
            values["input-name"],
            values["input-email"],
            values["input-password"]
          )
        }
        textLink="Войти"
        path="/signin"
        isValid={isValid}
        isLoading={isLoading}
        error={error}
      >
        <Input
          classNameInput={`form__input ${
            errors["input-name"] && "form__input_type_error"
          }`}
          classNameLabel="form__label"
          type="text"
          name="input-name"
          placeholder="Имя"
          label="Имя"
          required="required"
          minLength="2"
          maxLength="30"
          value={values["input-name"]}
          onChange={(e) => handleChange(e)}
        >
          <span className="form__error">{errors["input-name"]}</span>
        </Input>
        <Input
          classNameInput={`form__input ${
            errors["input-email"] && "form__input_type_error"
          }`}
          classNameLabel="form__label"
          type="email"
          name="input-email"
          placeholder="E-mail"
          label="E-mail"
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
          name="input-password"
          type="password"
          placeholder="Пароль"
          autoComplete="current-password"
          label="Пароль"
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
