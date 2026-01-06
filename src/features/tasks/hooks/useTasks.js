import { useActions } from "./useActions";
import useTaskFilters from "./useTaskFilters";
import { useEffect, useState } from "react";

const useTasks = () => {
  const {
    tasks,
    completeTask,
    addTask,
    deleteTask,
  } = useActions();

  const totalTasks = tasks ? tasks.length : 0;
  const completedTasks = tasks ? tasks.filter((task) => !!task.completed).length : 0;

  const [ isLoading, setIsLoading ] = useState(true);
  const [error, setError ] = useState(false);

  //simular que los datos tardan
  useEffect(() => {  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
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