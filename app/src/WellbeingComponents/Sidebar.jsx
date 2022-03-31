import React from "react";
import { Checkbox } from "./Checkbox";
import styles from "./sidebar.module.css";

export const Sidebar = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.headings}>FILTERS</p>
      </div>
      <div className={styles.inner}>
        <p className={styles.headings}>BRANDS</p>

        <div className={styles.checkboxes}>
          <Checkbox onClick={onClick} name="Wellbeing Nutrition" />
        </div>
      </div>
      <div className={styles.inner}>
        <p className={styles.headings}>DISCOUNTS</p>

        <div className={styles.checkboxes}>
          <Checkbox onClick={onClick} name="Less than 10%" />
          <Checkbox onClick={onClick} name="10% and above" />
          <Checkbox onClick={onClick} name="20% and above" />
          <Checkbox onClick={onClick} name="30% and above" />
        </div>
      </div>
      <div className={styles.inner}>
        <p className={styles.headings}>PRODUCT FORM</p>

        <div className={styles.checkboxes}>
          <Checkbox onClick={onClick} name="Powder" />
          <Checkbox onClick={onClick} name="Bottle" />
          <Checkbox onClick={onClick} name="Disintegrating Strip" />
        </div>
      </div>
      <div className={styles.inner}>
        <p className={styles.headings}>USES</p>

        <div className={styles.checkboxes}>
          <Checkbox onClick={onClick} name="Immunity Booster" />
          <Checkbox onClick={onClick} name="Skin Care" />
          <Checkbox onClick={onClick} name="Stomach Care" />
          <Checkbox onClick={onClick} name="Mind Care" />
          <Checkbox onClick={onClick} name="Cardiac Care" />
          <Checkbox onClick={onClick} name="Weight Management" />
          <Checkbox onClick={onClick} name="Bone, Joint & Muscle Care" />
          <Checkbox onClick={onClick} name="Liver Care" />
          <Checkbox onClick={onClick} name="Cough & Cold" />
          <Checkbox onClick={onClick} name="Nutritional Defic iencies" />
          <Checkbox onClick={onClick} name="Fever & Pain Management" />
          <Checkbox onClick={onClick} name="Hair Care" />
          <Checkbox onClick={onClick} name="Respiratory Care" />
          <Checkbox onClick={onClick} name="Eye & Ear Care" />
          <Checkbox onClick={onClick} name="Blood Coagulant" />
          <Checkbox onClick={onClick} name="Dental & Oral Care" />
        </div>
      </div>
    </div>
  );
};
