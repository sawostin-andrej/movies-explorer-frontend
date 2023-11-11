export default function Input({
  label,
  classNameLabel,
  tabIndex,
  classNameInput,
  type,
  name,
  value,
  required,
  placeholder,
  defaultValue,
  children,
  disabled,
  onChange,
}) {
  return (
    <label className={classNameLabel} tabIndex={tabIndex}>
      {label}
      <input
        className={classNameInput}
        type={type}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        minLength="2"
        maxLength="30"
        disabled={disabled}
        onChange={onChange}
      />
      {children}
    </label>
  );
}
