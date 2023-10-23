import AuthForm from "../AuthForm/AuthForm.jsx";
import Input from "../Input/Input.jsx";

const Register = () => {
  const handleRegister = () => {};
  const handleChange = () => {};

  return (
    <AuthForm
      title="Добро пожаловать!"
      name="form-register"
      textButton="Зарегистрироваться"
      textUnderButton="Уже зарегистрированы?"
      onSubmit={handleRegister}
      textLink="Войти"
      path="/signin"
    >
      <Input
        classNameInput="form__input"
        classNameLabel="form__label"
        type="text"
        name="form-name"
        placeholder="Имя"
        label="Имя"
        required="required"
        maxLength="30"
        minLength="2"
        defaultValue="Виталик"
        onChange={handleChange}
      >
        <span className="form__error"></span>
      </Input>
      <Input
        classNameInput="form__input"
        classNameLabel="form__label"
        type="email"
        name="form-email"
        placeholder="E-mail"
        required="required"
        label="E-mail"
        defaultValue="pochta@yandex.ru"
        onChange={handleChange}
      >
        <span className="form__error"></span>
      </Input>
      <Input
        classNameInput="form__input form__input_type_error"
        classNameLabel="form__label"
        name="form-password"
        type="password"
        placeholder="Пароль"
        required="required"
        label="Пароль"
        defaultValue="123456789"
        onChange={handleChange}
      >
        <span className="form__error">Что-то пошло не так...</span>
      </Input>
    </AuthForm>
  );
};

export default Register;
