import React, {useState, useRef, useEffect} from 'react';
import styles from './checkbox.module.css';

export const Checkbox = ({name, onClick}) => {

    const initState = localStorage.getItem(name) ? true : false;
    const [state, setState] = useState(initState);

    const ref = useRef(false)

    useEffect(() => {
        ref.current.checked = state;
    }, [])

    const setChecked = () => {
        setState(ref.current.checked);
        setTimeout(() => {
            onClick();

        }, 10);
    }

    if(state === true) {
        localStorage.setItem(name, state);
        let filter = JSON.parse( localStorage.getItem("filter") );
        filter = new Set(filter);
        filter = [...filter, name];
        localStorage.setItem("filter", JSON.stringify(filter));
    }
    else{
        localStorage.removeItem(name);
        let filter = JSON.parse( localStorage.getItem("filter") );
        filter = filter.filter((item) => item !== name);
        localStorage.setItem("filter", JSON.stringify(filter));
    }
    

  return (
    <div className={styles.container} onClick={setChecked}>
        <input ref={ref} className={styles.check} type="checkbox" name="" id={name} />
        <label className={styles.name} htmlFor={name} >{name}</label>
    </div>
  )
}