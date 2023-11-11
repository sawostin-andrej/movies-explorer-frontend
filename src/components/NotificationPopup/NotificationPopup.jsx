import "./NotificationPopup.css";
import imageLuck from "../../images/luck.svg";
import imageFailure from "../../images/failure.svg";

export default function NotificationPopup({ isOpen, onClose, isError, error }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-exit"
          type="button"
          onClick={onClose}
        ></button>
        <div className="popup__container-image">
          <img
            className="popup__image"
            src={isError ? imageLuck : imageFailure}
            alt={isError ? "Успешно" : "Ошибка"}
          />
          <h2 className="popup__label">{error}</h2>
        </div>
      </div>
    </div>
  );
}
