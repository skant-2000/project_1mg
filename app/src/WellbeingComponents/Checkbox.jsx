import React, {useState, useRef, useEffect} from 'react';
import styles from './checkbox.module.css';

export const Checkbox = ({name}) => {

    const initState = localStorage.getItem(name) ? true : false;
    console.log("Initial State : ", initState);
    const [state, setState] = useState(initState);

    const ref = useRef(false)

    useEffect(() => {
        ref.current.checked = state;
    }, [])

    const setChecked = () => {
        setState(ref.current.checked);
    }

    if(state === true)
        localStorage.setItem(name, state);
    else
        localStorage.removeItem(name);
    

  return (
    <div className={styles.container} onClick={setChecked}>
        <input ref={ref} className={styles.check} type="checkbox" name="" id={name} />
        <label className={styles.name} htmlFor={name} >{name}</label>
    </div>
  )
}
