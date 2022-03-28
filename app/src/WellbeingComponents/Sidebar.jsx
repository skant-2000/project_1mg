import React from 'react';
import { Checkbox } from './Checkbox';
import styles from './sidebar.module.css';

export const Sidebar = () => {
  return (
    <div className={styles.container} >
        <div className={styles.inner}>
            <p className={styles.headings}>FILTERS</p>
        </div>
        <div className={styles.inner}>
            <p className={styles.headings}>BRANDS</p>

            <div className={styles.checkboxes}>

            <Checkbox name="Wellbeing Nutrition" />
            </div>
        </div>
        <div className={styles.inner}>
            <p className={styles.headings}>DISCOUNTS</p>

            <div className={styles.checkboxes}>

            <Checkbox name="Less than 10%" />
            <Checkbox name="10% and above" />
            <Checkbox name="20% and above" />
            <Checkbox name="30% and above" />
            </div>


        </div>
        <div className={styles.inner}>
            <p className={styles.headings}>PRODUCT FORM</p>

            <div className={styles.checkboxes}>

            <Checkbox name="Powder" />
            <Checkbox name="Bottle" />
            <Checkbox name="Disintegrating Strip" />
            </div>
            
        </div>
        <div className={styles.inner}>
            <p className={styles.headings}>USES</p>

            <div className={styles.checkboxes}>

            <Checkbox name="Immunity Booster" />
            <Checkbox name="Skin Care" />
            <Checkbox name="Stomach Care" />
            <Checkbox name="Mind Care" />
            <Checkbox name="Cardiac Care" />
            <Checkbox name="Weight Management" />
            <Checkbox name="Bone, Joint & Muscle Care" />
            <Checkbox name="Liver Care" />
            <Checkbox name="Cough & Cold" />
            <Checkbox name="Nutritional Defic iencies" />
            <Checkbox name="Fever & Pain Management" />
            <Checkbox name="Hair Care" />
            <Checkbox name="Respiratory Care" />
            <Checkbox name="Eye & Ear Care" />
            <Checkbox name="Blood Coagulant" />
            <Checkbox name="Dental & Oral Care" />
            </div>
        </div>
    </div>
  )
}
