import { useMemo } from "react";
import useSearchFilter from "./useSearchFilter";
import useStatusFilter from "./useStatusFilter";

const useTaskFilters = (tasks) => {
  const [search, handleChangeSearch] = useSearchFilter();
  const [tasksStatus, handleChangeStatus] = useStatusFilter();

  const filteredTasks = useMemo(() => {
    const searchText = search.toLocaleLowerCase();

    if (!tasks) {
      return []
    }

    return tasks.filter(task => {
      const taskText = task.text.toLocaleLowerCase();
      const matchesSearch = taskText.includes(searchText);

      if (tasksStatus === "Pendientes") {
        return !task.completed && matchesSearch;
      } else if (tasksStatus === "Completadas") {
        return task.completed && matchesSearch;
      }
      return matchesSearch;
    });
  }, [tasks, search, tasksStatus]);

  return {
    search,
    tasksStatus,
    handleChangeSearch,
    handleChangeStatus,
    filteredTasks,
  };
};

export default useTaskFilters;
