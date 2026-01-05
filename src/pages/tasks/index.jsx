import { ErrorAlert } from "@/components/ui";
import "./tasks.css";
import { useTaskState } from "@/context/tasks/TaskContext";
import TaskProvider from "@/context/tasks/TaskProvider";
import {
  TaskList,
  TaskItem,
  Controls,
  TaskSearch,
  TaskCounter,
  StatusSelect,
  LayoutTaskSkeleton,
  ModalTaskForm,
  EmptyTaskList,
} from "@/features/tasks";

const Index = () => {
  const { filteredTasks, totalTodos, isLoading, error } = useTaskState();
  const isEmpty = totalTodos === 0;

  return (
    <div className="task-container">
      <TaskCounter />
      <Controls>
        <div className="controls-group">
          <StatusSelect />
          <ModalTaskForm />
        </div>
        <TaskSearch />
      </Controls>

      {error && <ErrorAlert>Ocurrió un error inesperado.</ErrorAlert>}
      {isLoading && <LayoutTaskSkeleton />}
      {isEmpty && !isLoading && <EmptyTaskList />}

      {!isEmpty && !isLoading && (
        <TaskList>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </TaskList>
      )}
    </div>
  );
};

const Tasks = () => {
  return (
    <TaskProvider>
      <Index />
    </TaskProvider>
  );
};

export { Tasks };
