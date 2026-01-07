import { useState } from "react";
import "./TaskForm.css";
import { useTaskActions } from "@/context/tasks/TaskContext";
import { Button } from "@/components/ui";
import { useModal } from "@/components/ui/";

const TaskForm = () => {
  const { toggleModal } = useModal();
  const { addTask } = useTaskActions();
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") {
      return window.alert("Escribe algo para agregarlo correctamente.");
    }

    addTask(newTask);
    toggleModal();
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Esribe tu nuevo TODO</label>
      <textarea
        spellCheck
        required
        autoCapitalize="words"
        value={newTask}
        onChange={({ target }) => setNewTask(target.value)}
        placeholder="Cortar cebolla para el almuerzo"
      />
      <div className="form-actions">
        <Button variant="secondary" onClick={toggleModal}>
          Cancelar
        </Button>
        <Button type="submit">Agregar</Button>
      </div>
    </form>
  );
};

export { TaskForm };
