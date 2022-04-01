import axios from 'axios';
import React, {useState} from 'react';
import styles from './card.module.css';

export const Card = ({item}) => {

    const {discount,form,image,mrp, name,quantity,sp,uses,_id} = item;

    const [ADD, setADD] = useState("ADD");

    const handelClick = async () => {

        await setTimeout(() => {
          setADD("ADDIND...")
        }, 100)

        await setTimeout(() => {
          setADD("✔ ADDED")
        }, 1200)

        await setTimeout(() => {
          setADD("ADD");
        }, 2000)

        const post = await axios.post("http://localhost:8001/cart", {...item, numberOfItems: 1});
        console.log(post);
    }
    

  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>            
            <img className={styles.image} src={image} alt="" />
        </div>
        <p className={styles.name} >{name}</p>
        <p className={styles.quantity}>{quantity}</p>
        <p className={styles.price}>MRP <span className={styles.mrp}>₹{mrp}</span> <span className={styles.discount}>{discount}% OFF</span></p>
        <div className={styles.bottom}><span className={styles.sp}>₹{sp}</span><span onClick={handelClick} className={styles.add}>{ADD}</span></div>
    </div>
  )
}
