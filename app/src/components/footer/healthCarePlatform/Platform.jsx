import React from 'react'
import styles from "./platform.module.css"
export const Platform = () => {
  return (
		<div style={{backgroundColor: "#fff"}}>
			<div className={styles.forBoxShadow}>
				<h2 className={styles.indialargest}>
					INDIA’S LARGEST HEALTHCARE PLATFORM
				</h2>
				<div className={styles.visitorsMain}>
					<div>
						<div className={styles.numbers}>260m+</div>
						<div>visitors</div>
					</div>
					<div>
						<div className={styles.numbers}>31m+</div>
						<div>Orders Delivered</div>
					</div>
					<div>
						<div className={styles.numbers}>1800m+</div>
						<div>Cities</div>
					</div>
				</div>
			</div>
		</div>
  );
}
