// import defaultTasks from "@/utils/defaultTasks";
import { useCallback } from "react";
import { useReducer, useEffect } from "react";

const TASK_ACTIONS = {
  INIT: "INIT",
  COMPLETE: "COMPLETE",
  ADD: "ADD",
  DELETE: "DELETE"
}

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASK_ACTIONS.INIT:
      return payload.tasks

    case TASK_ACTIONS.COMPLETE:
      return state.map(
        task => task.id === payload.id
         ? {...task, completed: true}
         : task 
      );

    case TASK_ACTIONS.ADD:
      return [payload.task, ...state];

    case TASK_ACTIONS.DELETE:
      return state.filter(task => task.id !== payload.id);
  
    default:
      return state
  }
}

// function getInitialState(){
//   const savedTasks = window.localStorage.getItem('TASKS');
//   return savedTasks ? JSON.parse(savedTasks): defaultTasks;
// }

const useTaskActions = () => {
  const [ tasks, dispatch ] = useReducer(reducer, []);

  useEffect(() => {
    window.localStorage.setItem('TASKS', JSON.stringify(tasks));
  }, [tasks]);

  const setInitalTasks = useCallback((tasks) => {
    dispatch({
      type: TASK_ACTIONS.INIT,
      payload: { tasks }
    })
  }, []);

  const completeTask = useCallback((id) => {
    dispatch({
      type: TASK_ACTIONS.COMPLETE,
      payload: { id }
    });

  }, [])

  const addTask = useCallback((taskText) => {
    dispatch({
      type: TASK_ACTIONS.ADD,
      payload: {
        task: {
          id: crypto.randomUUID(),
          text: taskText.trim(),
          completed: false,
          date: new Date().toISOString(),
        }
      }
    });

  }, [])

  const deleteTask = useCallback((id) => {
    
    dispatch({
      type: TASK_ACTIONS.DELETE,
      payload: { id }
    });

  }, [])

  return {
    tasks,
    setInitalTasks,
    completeTask,
    addTask,
    deleteTask
  };

}

export { useTaskActions };