import "./TaskSearch.css";
import { Input } from "@/components/ui/Input/Input";
import { useTaskActions } from "@/context/tasks/TaskContext";

function TaskSearch() {
  const { search, handleChangeSearch } = useTaskActions();
  return (
    <Input
      value={search}
      className="task-search"
      placeholder="Buscar tareas..."
      onChange={handleChangeSearch}
    />
  );
}

export { TaskSearch };
