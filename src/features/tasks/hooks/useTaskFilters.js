import { useCallback } from "react";
import {
  useState,
  useMemo
} from "react";

const useTaskFilters = (tasks) => {
  const [search, setSearch] = useState("");
  const handleChangeSearch = useCallback(({ target }) => setSearch(target.value), []);

  const [tasksStatus, setTasksStatus] = useState('Todas');
  const handleChangeStatus = useCallback(({ target }) => setTasksStatus(target.value), []);

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
