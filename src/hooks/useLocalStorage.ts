import { useState, useEffect } from "react";

type UseLocalStorageReturnType<T> = [
  T,
  React.Dispatch<React.SetStateAction<T>>,
  () => void,
  (updateFunction: (prevValue: T) => T) => void
];

function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorageReturnType<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(error);
    }
  };

  const editItem = (updateFunction: (prevValue: T) => T) => {
    try {
      setStoredValue((prevValue) => {
        const updatedValue = updateFunction(prevValue);
        window.localStorage.setItem(key, JSON.stringify(updatedValue));
        return updatedValue;
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return [storedValue, setValue, removeItem, editItem];
}

export default useLocalStorage;
