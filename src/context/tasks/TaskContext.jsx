import { createContext, useContext } from "react";

export const TaskStateContext = createContext(null);
export const TaskActionsContext = createContext(null);

export const useTaskState = () => {
  const context = useContext(TaskStateContext);
  if (!context) {
    throw new Error("useTaskState debe usarse dentro de TaskProvider");
  }
  return context;
};

export const useTaskActions = () => {
  const context = useContext(TaskActionsContext);
  if (!context) {
    throw new Error("useTaskActions debe usarse dentro de TaskProvider");
  }
  return context;
};
