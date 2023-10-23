import { useState } from "react";
import "./Profile.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Profile({ setIsLoggedIn }) {
  const [isEdit, setIsEdit] = useState(false);

  function handleEdit(e) {
    e.preventDefault();
    setIsEdit(true);
  }

  function handleSave(e) {
    e.preventDefault();
    setIsEdit(false);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <Form
        className={`profile__form ${isEdit ? "profile__form_type_save" : ""}`}
        name="profile"
        onSubmit={isEdit ? handleSave : handleEdit}
      >
        <div className="profile__container">
          <Input
            classNameInput="profile__input"
            classNameLabel="profile__label profile__label_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            label="Имя"
            defaultValue="Виталий"
            minlength="2"
            maxlength="30"
            disabled={!isEdit && "disabled"}
          />
          <Input
            classNameInput="profile__input"
            classNameLabel="profile__label profile__label_type_email"
            type="email"
            name="email"
            placeholder="E-mail"
            label="E-mail"
            defaultValue="pochta@yandex.ru"
            disabled={!isEdit && "disabled"}
          />
        </div>
        <div
          className={`profile__btn ${isEdit ? "profile__btn_type_save" : ""}`}
        >
          {isEdit ? (
            <>
              <p className="profile__error"></p>
              <Button
                className="profile__button profile__button_type_save"
                type="submit"
                text="Сохранить"
                disabled={false}
              />
            </>
          ) : (
            <>
              <Button
                className="profile__button profile__button_type_edit"
                type="submit"
                text="Редактировать"
              />
              <Button
                className="profile__button profile__button_type_exit"
                type="button"
                text="Выйти из аккаунта"
                onClick={handleLogout}
              />
            </>
          )}
        </div>
      </Form>
    </section>
  );
}
