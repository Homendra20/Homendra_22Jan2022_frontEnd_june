import {useEffect, useState} from 'react';


const DATA = "Online-Editor-"

function useLocalStorage(key, initialValue) {

  const DATAKEY = DATA + key;

  const [value, setValue] = useState(() => {
    const jsondata = localStorage.getItem(DATAKEY);
    if(jsondata != null) {
      return JSON.parse(jsondata)
    }

    if(typeof initialValue === "function"){
      return initialValue();
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(DATAKEY, JSON.stringify(value))
  }, [DATAKEY, value])

  return [value, setValue];
}

export default useLocalStorage;
