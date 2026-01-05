import { useCallback } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useReducer } from "react";
import { useTaskActions } from "./useTaskActions";

const useTaksStorage = () => {
  const { tasks, ...taskActions } = useTaskActions();
  // const [ tasks, dispatch ] = useReducer(reducer, []);
  const [ storeTasks ] = useLocalStorage('TASKS');

  const completeTask = useCallback((id) => {
      taskActions.complete(id);
      storeTasks(newTasks);
      setTasks(newTasks)
    },
    [tasks, storeTasks, taskActions]
  );

  const addTask = useCallback(task => {
      const newTasks = [...tasks];
      newTasks.unshift(task);
      storeTasks(newTasks);
      setTasks(newTasks)
    }, [tasks, storeTasks, setTasks]
  );

  const deleteTask = useCallback((id) => {
      const newTasks = tasks.filter((task) => task.id !== id);
      storeTasks(newTasks);
      setTasks(newTasks);
    },
    [tasks, storeTasks, setTasks]
  );

  return {
    completeTask,
    addTask,
    deleteTask
  };
};

export default useTaksStorage;
