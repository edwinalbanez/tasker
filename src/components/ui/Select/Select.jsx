import "./Select.css";

function Select({
  children,
  onChange,
  className
}) {
  return (
    <select
      onChange={onChange}
      className={`select ${className}`}
    >
      { children }
    </select>
  );
}

export { Select };
