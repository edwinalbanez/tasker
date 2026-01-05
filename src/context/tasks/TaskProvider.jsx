import { useMemo } from "react";
import { useTasks } from "@/features/tasks";
import { TaskStateContext, TaskActionsContext } from "./TaskContext";

const TaskProvider = ({ children }) => {
  console.log("provider");
  
  const {
    isLoading,
    error,
    completeTask,
    addTask,
    deleteTask,
    completedTasks,
    totalTasks,
    search,
    filteredTasks,
    handleChangeSearch,
    handleChangeStatus,
  } = useTasks();

  const stateValue = useMemo(
    () => ({
      isLoading,
      error,
      completedTasks,
      totalTasks,
      search,
      filteredTasks,
    }),
    [isLoading, error, completedTasks, totalTasks, search, filteredTasks]
  );

  const actionsValue = useMemo(
    () => ({
      completeTask,
      addTask,
      deleteTask,
      handleChangeSearch,
      handleChangeStatus,
    }),
    [completeTask, deleteTask, addTask, handleChangeSearch, handleChangeStatus]
  );

  return (
    <TaskStateContext.Provider value={stateValue}>
      <TaskActionsContext.Provider value={actionsValue}>
        {children}
      </TaskActionsContext.Provider>
    </TaskStateContext.Provider>
  );
};

export default TaskProvider;
