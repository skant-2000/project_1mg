import React from 'react'
import styles from "./getLink.module.css"
export const GetLink = () => {
  return (
		<div className={styles.forBoxShadow}>
          <div className={styles.text}>Get the link to download App</div>
          <div>
              <input className={styles.inputLink} type="text" placeholder="Enter Phone Number" />
              <button className={styles.buttonLink}>Send Link</button>
          </div>
		</div>
  );
}
