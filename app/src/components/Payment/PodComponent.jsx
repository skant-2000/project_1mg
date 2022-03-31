import React from 'react'
import styles from "./podComponent.module.css"
export const PodComponent = () => {
  return (
		<div className ={styles.podMain}>
			<div>
				<img
					src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530103046/marketing/dwuduzecduhobnrvro1z.png"
					alt=""
				/>
			</div>
			<div>CASH ON DELIVERY</div>
		</div>
  );
}
