import { Select } from "@/components/ui/Select/Select";
import { useTaskActions } from "@/context/tasks/TaskContext";

function StatusSelect() {
  const { handleChangeStatus } = useTaskActions();
  const options = ["Todas", "Pendientes", "Completadas"];
  return (
    <Select onChange={handleChangeStatus}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}

export { StatusSelect };
