export const useLocalStorage = () => {
  const saveData = (keyName, data) => localStorage.setItem(keyName, JSON.stringify(data));
  const loadData = (keyName) => JSON.parse(localStorage.getItem(keyName));

  return { saveData, loadData };
};
