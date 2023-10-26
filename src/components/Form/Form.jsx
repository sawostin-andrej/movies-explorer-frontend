export default function Form({ className, name, onSubmit, children }) {
  return (
    <form className={className} name={name} onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
}
