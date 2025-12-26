import { useState } from "react";
import useTaskStorage from "./useTaskStorage";
import useTaskFilters from "./useTaskFilters";
import { useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import defaultTasks from "@/utils/defaultTasks";

const useTasks = () => {
  const [ tasks, setTasks ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [error, setError ] = useState(false);
  const [ saveTasks, getTasks ] = useLocalStorage('TASKS');

  const totalTasks = tasks ? tasks.length : 0;
  const completedTasks = tasks ? tasks.filter((task) => !!task.completed).length : 0;

  useEffect(() => {  
    const timer = setTimeout(() => {
      try {
        const tasksFromStorage = getTasks();
        if (!tasksFromStorage) {
          saveTasks(defaultTasks);
          setTasks(defaultTasks);
          setIsLoading(false);
          return;
        }

        setTasks(tasksFromStorage);
        setIsLoading(false);
          
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.error("Error en useLocalStorage:", error);
      }
  
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const {
    completeTask,
    addTask,
    deleteTask,
  } = useTaskStorage(tasks, setTasks);

  const {
    search,
    handleChangeSearch,
    handleChangeStatus,
    filteredTasks
  } = useTaskFilters(tasks);

  return {
    tasks,
    completeTask,
    addTask,
    deleteTask,
    completedTasks,
    totalTasks,
    filteredTasks,
    search,
    handleChangeSearch,
    handleChangeStatus,
    isLoading,
    setIsLoading,
    error,
    setError,
  };
};

export default useTasks;