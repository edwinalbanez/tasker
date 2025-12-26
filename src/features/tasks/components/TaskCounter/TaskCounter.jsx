import { useTaskState } from "@/context/tasks/TaskContext";
import "./TaskCounter.css";

function TaskCounter() {
  const { isLoading, completedTasks, totalTasks } = useTaskState();
  const text =
    completedTasks === totalTasks
      ? "Hoy no tienes nada pendiente, ¡Felicidades!"
      : `Has completado ${completedTasks} de ${totalTasks} tareas`;

  return (
    <h1>
      {isLoading ? 'Cargando tareas...': text}
    </h1>
  );
}

export { TaskCounter };
