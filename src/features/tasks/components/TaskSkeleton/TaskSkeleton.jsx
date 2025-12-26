import { TaskList } from "../TaskList/TaskList";
import "./TaskSkeleton.css";

function TaskSkeleton() {
  return (
    <div className="task-skeleton-item">
      <div className="skeleton-header">
        <div className="skeleton-line short"></div>
        <div className="skeleton-circle"></div>
      </div>
      <div className="skeleton-content">
        <div className="skeleton-line full"></div>
        <div className="skeleton-line full"></div>
        <div className="skeleton-line medium"></div>
      </div>
      <div className="skeleton-footer">
        <div className="skeleton-badge"></div>
      </div>
    </div>
  );
}

function LayoutTaskSkeleton() {
  return (
    <TaskList>
      {[1, 2, 3, 4].map((n) => (
        <TaskSkeleton key={n} />
      ))}
    </TaskList>
  );
}

export { TaskSkeleton, LayoutTaskSkeleton };
