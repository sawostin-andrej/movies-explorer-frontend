import AuthForm from "../AuthForm/AuthForm.jsx";
import Input from "../Input/Input.jsx";

export default function Login({ setIsLoggedIn }) {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleChange = () => {};

  return (
    <AuthForm
      title="Рады видеть!"
      name="login"
      onSubmit={handleLogin}
      textButton="Войти"
      textUnderButton="Ещё не зарегистрированы?"
      textLink="Регистрация"
      path="/signup"
      isLoginForm={true}
    >
      <Input
        classNameInput="form__input"
        classNameLabel="form__label"
        label="E-mail"
        type="email"
        name="email"
        placeholder="E-mail"
        required="required"
        defaultValue="pochta@yandex.ru"
        onChange={handleChange}
      >
        <span className="form__error"></span>
      </Input>
      <Input
        classNameInput="form__input"
        classNameLabel="form__label"
        label="Пароль"
        type="password"
        name="password"
        placeholder="Пароль"
        required="required"
        defaultValue="123456789"
        onChange={handleChange}
      >
        <span className="form__error"></span>
      </Input>
    </AuthForm>
  );
}
