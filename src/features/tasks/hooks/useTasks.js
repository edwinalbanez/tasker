import { useTaskActions } from "./useTaskActions";
import useTaskFilters from "./useTaskFilters";
import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import defaultTasks from "@/utils/defaultTasks";

const useTasks = () => {
  const {
    tasks,
    setInitalTasks,
    completeTask,
    addTask,
    deleteTask,
  } = useTaskActions();
  
  const [, getTasks ] = useLocalStorage('TASKS');

  const totalTasks = tasks ? tasks.length : 0;
  const completedTasks = tasks ? tasks.filter((task) => !!task.completed).length : 0;

  const [ isLoading, setIsLoading ] = useState(true);
  const [error, setError ] = useState(false);

  //simular que los datos tardan
  useEffect(() => {  
    const timer = setTimeout(() => {
      try {
        const tasksFromStorage = getTasks();
        const isEmpty = tasksFromStorage.length === 0
        setInitalTasks(isEmpty ? defaultTasks : tasksFromStorage);
        setIsLoading(!isEmpty);
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