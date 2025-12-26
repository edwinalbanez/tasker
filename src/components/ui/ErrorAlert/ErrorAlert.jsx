import "./ErrorAlert.css"

const ErrorAlert = ({
  children
}) => {
  return (
    <div className="error-alert">
      {children }
    </div>
  )
}

export { ErrorAlert }