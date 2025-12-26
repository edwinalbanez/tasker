import { useState } from "react";

const useSearchFilter = () => {
  const [search, setSearch] = useState("");
  const handleChangeSearch = ({ target }) => setSearch(target.value);

  return [ search, handleChangeSearch ];
}

export default useSearchFilter;

