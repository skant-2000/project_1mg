import React from "react";
import styles from "./addressNavbar.module.css";
export const AddressNavbar = () => {
	return (
        <div className={styles.AddressNavbarRoot}>
			<div className={styles.AddressNavbarMain}>
				<div className={styles.imgContainer}>
					<img
						className={styles.imgTATA}
						src="https://www.1mg.com/images/tata_1mg_logo.svg"
						alt=""
					/>
				</div>
				<div className={styles.threeFlex}>
					<div className={styles.threeFlexSmall}>
						<div className={styles.Num}>1</div>
						<div>My Cart</div>
					</div>
					<div className={styles.threeFlexSmall}>
						<div className={styles.Num}>2</div>
						<div>Order Summary</div>
					</div>
					<div className={styles.threeFlexSmall}>
						<div className={styles.Num3}>3</div>
						<div>Payment</div>
					</div>
				</div>
				<div>Need Help?</div>
			</div>
		</div>
	);
};
