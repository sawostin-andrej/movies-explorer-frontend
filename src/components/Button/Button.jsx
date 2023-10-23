export default function Button({
  className,
  type,
  text,
  children,
  onClick,
  disabled,
}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
}
