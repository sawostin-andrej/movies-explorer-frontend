import "./FilterCheckbox.css";

function FilterCheckbox({ isCheckboxActive, toggleCheckbox }) {
  return (
    <div className="filter__checkbox">
      <label className="filter__toggle">
        <input
          className="filter__input"
          onChange={toggleCheckbox}
          type="checkbox"
          id="checkbox"
          name="checkbox"
          checked={isCheckboxActive}
        ></input>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
