import { useState, useEffect } from 'react'
//Set the initial use state for usePersistedState to interact with ThemeContext.tsx
export default function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

//converts JSON into object to be able manipulate it then
    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState;
    }
  });
//converts JS value to JSON string
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}