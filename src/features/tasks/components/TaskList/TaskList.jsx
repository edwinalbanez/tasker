import './TaskList.css'
function TaskList(props) {
  return (
    <div className="task-list">
      {props.children}
    </div>
  );
}

export { TaskList };
