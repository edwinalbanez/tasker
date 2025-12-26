import './Button.css';

function Button({
  type = 'button',
  children,
  onClick = () => {},
  className,
  variant = "primary"
}){
  return(
    <button
      type={type}
      onClick={onClick}
      className={`button-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

export { Button };