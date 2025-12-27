import "./TaskItem.css";
import { useTaskActions } from "@/context/tasks/TaskContext";
import { Trash, CircleCheckBig, CircleDashed } from "lucide-react";

function TaskItem({ task }) {
  const { completeTask, deleteTask } = useTaskActions();

  const dateUTC = new Date(task.date);
  const formattedDate = Intl.DateTimeFormat(navigator.language, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(dateUTC);

  return (
    <div className="task-item">
      <ItemHeader>
        <span className="task-date">{formattedDate}</span>
        <span onClick={() => deleteTask(task.id)}>
          <Trash className="delete-icon" size={20} />
        </span>
      </ItemHeader>

      <ItemContent completed={task.completed}>
        {task.text}
      </ItemContent>

      <ItemFooter>
        <button
          className={`status-badge ${task.completed ? "completed" : "pending"}`}
          onClick={() => completeTask(task.id)}
        >
          {task.completed ? (
            <CircleCheckBig size={20} />
          ) : (
            <CircleDashed size={20} />
          )}

          {task.completed ? "Completada" : "Completar"}
        </button>
      </ItemFooter>
    </div>
  );
}

function ItemHeader({ children }) {
  return (
    <div className="task-item-header">
    {children}
    </div>
  )
}

function ItemContent({ children, completed }) {
  const statusClass = completed ? "completed" : "pending";
  return (
    <div className={`task-content ${statusClass}`}>
      {children}
    </div>
  );
}

function ItemFooter({ children }) {
  return (
    <div className="task-item-footer">
      {children}
    </div>
  );
}

export { TaskItem };
