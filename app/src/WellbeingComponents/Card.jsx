import React from 'react';
import styles from './card.module.css';

export const Card = ({item}) => {

    const {discount,form,image,mrp, name,quantity,sp,uses,_id} = item;

    

  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>            
            <img className={styles.image} src={image} alt="" />
        </div>
        <p className={styles.name} >{name}</p>
        <p className={styles.quantity}>{quantity}</p>
        <p className={styles.price}>MRP <span className={styles.mrp}>₹{mrp}</span> <span className={styles.discount}>{discount}% OFF</span></p>
        <div className={styles.bottom}><span className={styles.sp}>₹{sp}</span><span className={styles.add}>ADD</span></div>
    </div>
  )
}
