import './Input.css';

function Input({
  value,
  className,
  onChange,
  placeholder = ''
}) {
  return (
    <input
      value={value}
      className={`input ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export { Input };