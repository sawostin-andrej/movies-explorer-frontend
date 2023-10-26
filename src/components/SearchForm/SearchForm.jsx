import "./SearchForm.css";
import Input from "../Input/Input";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Form from "../Form/Form";
import Button from "../Button/Button";

export default function SearchForm() {
  return (
    <section className="search" aria-label="поиск фильмов">
      <Form className="search__form" name="search-form">
        <div className="search__container">
          <div className="search__container-input">
            <div className="search__icon"></div>
            <Input
              classNameLabel="search__label"
              classNameInput="search__input"
              type="search"
              name="search-input"
              placeholder="Фильм"
              required="required"
            />
            <Button className="search__button" type="submit" text="Найти" />
          </div>
          <div className="search__filter">
            <FilterCheckbox />
            <p className="search__filter-text">Короткометражки</p>
          </div>
        </div>
      </Form>
    </section>
  );
}
