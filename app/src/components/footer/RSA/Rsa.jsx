import React from "react";
import styles from "./rsa.module.css";
export const Rsa = () => {
	return (
		<div className={styles.rsaMainRoot}>
			<div className={styles.rsaMain}>
				<div className={styles.reliableMain}>
					<div>
						<img src="svg/secure.svg" alt="" />
					</div>
					<div>
						<div className={styles.reliableText}>Reliable</div>
						<div className={styles.reliablePara}>
							All products displayed on Tata 1mg are procured from
							verified and licensed pharmacies. All labs listed on
							the platform are accredited
						</div>
					</div>
				</div>
				<div className={styles.reliableMain}>
					<div>
						<img src="svg/reliable.svg" alt="" />
					</div>
					<div>
						<div className={styles.reliableText}>Secure</div>
						<div className={styles.reliablePara}>
							Tata 1mg uses Secure Sockets Layer (SSL) 128-bit
							encryption and is Payment Card Industry Data
							Security Standard (PCI DSS) compliant
						</div>
					</div>
				</div>
				<div className={styles.reliableMain}>
					<div>
						<img src="svg/affordable.svg" alt="" />
					</div>
					<div>
						<div className={styles.reliableText}>Affordable</div>
						<div className={styles.reliablePara}>
							Find affordable medicine substitutes, save up to 50%
							on health products, up to 80% off on lab tests and
							free doctor consultations.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
