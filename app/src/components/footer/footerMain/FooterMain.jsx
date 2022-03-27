import React from "react";
import styles from "./footerMain.module.css";

export const FooterMain = () => {
	return (
		<div className={styles.forBg}>
			<div className={styles.footerMainMain}>
				<div className={styles.footerFlex}>
					<div>
						<div className={styles.knowUs}>Know Us</div>
						<div className={styles.list}>
							<div>About Us</div>
							<div>Contact Us</div>
							<div>Press Coverage</div>
							<div>Careers</div>
							<div>Business Partnership</div>
							<div>Become a Health Partner</div>
						</div>
					</div>
					<div>
						<div className={styles.knowUs}>Our Policies</div>
						<div className={styles.list}>
							<div>Privacy Policy</div>
							<div>Terms and Conditions</div>
							<div>Editorial Policy</div>
							<div>Return Policy</div>
							<div>IP Policy</div>
							<div>Grievance Redressal Policy</div>
						</div>
					</div>
					<div>
						<div className={styles.knowUs}>Our Services</div>
						<div className={styles.list}>
							<div>Order Medicines</div>
							<div>Book Lab Tests</div>
							<div>Consult a Doctor</div>
							<div>Ayurveda Articles</div>
							<div>Hindi Articles</div>
							<div>Care Plan</div>
						</div>
					</div>
					<div>
						<div className={styles.knowUs}>Connect</div>
						<div className={styles.socialLink}>Social Links</div>
						<div className={styles.logoMain}>
							<div>
								<img
									className={styles.footerLogo}
									src="svg/facebook.svg"
									alt=""
								/>
							</div>
							<div>
								<img
									className={styles.footerLogo}
									src="svg/twitter.svg"
									alt=""
								/>
							</div>
							<div>
								<img
									className={styles.footerLogo}
									src="svg/youtube.svg"
									alt=""
								/>
							</div>
							<div>
								<img
									className={styles.footerLogo}
									src="svg/linkedin.svg"
									alt=""
								/>
							</div>
							<div>
								<img
									className={styles.footerLogo}
									src="svg/medium.svg"
									alt=""
								/>
							</div>
						</div>
						<div className={styles.socialLink}>
							Want daily dose of health?
						</div>
						<button className={styles.signUpFooter}>SIGN UP</button>
					</div>
				</div>
				<div className={styles.downloadAppMain}>
					<div>Download App</div>
					<div>
						<img
							className={styles.footergoogleLink}
							src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
							alt=""
						/>
					</div>
					<div>
						<img
							className={styles.footerappleLink}
							src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
