import React from 'react'
import styles from './simpleNavbar.module.css'
export const SimpleNavbar = () => {
  return (
		<div className ={styles.forbg}>
			<div>
              <img
                  className={styles.img}
					src="https://www.1mg.com/images/tata_1mg_logo.svg"
					alt=""
				/>
			</div>
			<div>Need Help?</div>
		</div>
  );
}
