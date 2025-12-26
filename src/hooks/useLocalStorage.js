const useLocalStorage = (itemName) => {
  const saveItem = (newItem) => {
    const newValue = JSON.stringify(newItem);
    window.localStorage.setItem(itemName, newValue);
  }

  const getItem = () => {
    const item = window.localStorage.getItem(itemName);
    return JSON.parse(item);
  }

  return [saveItem, getItem]
}

export default useLocalStorage