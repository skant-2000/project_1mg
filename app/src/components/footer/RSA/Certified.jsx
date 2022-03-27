import React from 'react'
import styles from "./certified.module.css"

export const Certified = () => {
  return (
		<div className={styles.certifiedRoot}>
			<div className={styles.certifiedMain}>
				<div className={styles.certifiedImgRooot}>
					<img
						className={styles.certifiedImg}
						src="https://static.legitscript.com/seals/729605.png"
						alt=""
					/>
					<img
						className={styles.certifiedImg}
						src="https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png"
						alt=""
					/>
				</div>
				<div>
					<p className={styles.certifiedISOPara}>
						India's only LegitScript and ISO/ IEC 27001 certified
						online healthcare platform
					</p>
				</div>
			</div>
		</div>
  );
}
