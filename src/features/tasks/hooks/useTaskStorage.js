import { useCallback } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const useTaksStorage = (tasks, setTasks) => {
  const [ saveTasks ] = useLocalStorage('TASKS');

  const completeTask = useCallback((id) => {
      const newTasks = tasks.map(task =>
        task.id === id ? { ...task, completed: true } : task
      );
      saveTasks(newTasks);
      setTasks(newTasks)
    },
    [tasks, saveTasks, setTasks]
  );

  const addTask = useCallback(task => {
      const newTasks = [...tasks];
      newTasks.unshift(task);
      saveTasks(newTasks);
      setTasks(newTasks)
    }, [tasks, saveTasks, setTasks]
  );

  const deleteTask = useCallback((id) => {
      const newTasks = tasks.filter((task) => task.id !== id);
      saveTasks(newTasks);
      setTasks(newTasks);
    },
    [tasks, saveTasks, setTasks]
  );

  return {
    completeTask,
    addTask,
    deleteTask
  };
};

export default useTaksStorage;
