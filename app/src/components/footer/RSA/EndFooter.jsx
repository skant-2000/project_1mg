import React from "react";
import styles from "./endFooter.module.css";

export const EndFooter = () => {
	return (
		<div className={styles.endRoot}>
			<div className={styles.endMain}>
				<div className={styles.endPara}>
					© 2022 Tata 1mg. All rights reserved. In compliance with
					Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules,
					1945, we don't process requests for Schedule X and other
					habit forming drugs.
				</div>
				<div className={styles.imgGrid}>
					<img
						className={styles.visaImg}
						src="images/visa.png"
						alt=""
					/>
					<img
						className={styles.visaImg}
						src="images/mastercard.png"
						alt=""
					/>
					<img
						className={styles.visaImg}
						src="images/american_express.jpg"
						alt=""
					/>
					<img
						className={styles.visaImg}
						src="images/rupay.jpg"
						alt=""
					/>
					<img
						className={styles.visaImg}
						src="images/netbanking.png"
						alt=""
					/>
					<img
						className={styles.visaImg}
						src="images/cod.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
