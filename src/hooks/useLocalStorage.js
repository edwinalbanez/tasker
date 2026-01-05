const useLocalStorage = (itemName) => {
  const storeItem = (newItem) => {
    const newValue = JSON.stringify(newItem);
    window.localStorage.setItem(itemName, newValue);
  }

  const getItem = () => {
    const item = window.localStorage.getItem(itemName);
    console.log(item);
    
    return JSON.parse(item) || null;
  }

  return [storeItem, getItem]
}

export default useLocalStorage