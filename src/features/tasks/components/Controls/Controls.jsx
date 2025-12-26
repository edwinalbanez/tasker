import "./Controls.css";

function Controls({ children }) {
  return (
    <div>
      <div className="controls">
        {children}
      </div>
    </div>
  );
}

export { Controls };
