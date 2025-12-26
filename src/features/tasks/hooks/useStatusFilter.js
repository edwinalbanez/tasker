import { useState } from "react"

const useStatusFilter = () => {
  const [ todosStatus, setTodosStatus] = useState('Todas');
  const handleChangeStatus = ({ target }) => setTodosStatus(target.value);

  return [ todosStatus, handleChangeStatus ];
}

export default useStatusFilter;