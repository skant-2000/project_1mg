import React, { useState } from "react";
import styles from "./knowMoreAbout.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const KnowMoreAbout = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className={styles.knowMoreRoot}>
				<div className={styles.knowMoreMain} onClick={handleOpen}>
					<div className={styles.knowMoreText}>
						Know more about Tata 1mg
					</div>
					<div>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</div>
				</div>
			</div>
			{open && (
				<div className={styles.openRoot}>
					<div className={styles.openMain}>
						<div className={styles.accessText}>
							Access medical and health information
						</div>
						<div className={styles.tataPara}>
							Tata 1mg provides you with medical information which
							is curated, written and verified by experts,
							accurate and trustworthy. Our experts create
							high-quality content about medicines, diseases, lab
							investigations, Over-The-Counter (OTC) health
							products, Ayurvedic herbs/ingredients, and
							alternative remedies.
						</div>
						<div className={styles.accessText}>
							Order medicines online
						</div>
						<div className={styles.tataPara}>
							Get free medicine home delivery in over 1800 cities
							across India. You can also order Ayurvedic,
							Homeopathic and other Over-The-Counter (OTC) health
							products. Your safety is our top priority. All
							products displayed on Tata 1mg are procured from
							verified and licensed pharmacies.
						</div>
						<div className={styles.accessText}>Book lab tests</div>
						<div className={styles.tataPara}>
							Book any lab tests and preventive health packages
							from certified labs and get tested from the comfort
							of your home. Enjoy free home sample collection,
							view reports online and consult a doctor online for
							free.
						</div>
						<div className={styles.accessText}>
							Consult a doctor online
						</div>
						<div className={styles.tataPara}>
							Got a health query? Consult doctors online from the
							comfort of your home for free. Chat privately with
							our registered medical specialists to connect
							directly with verified doctors. Your privacy is
							guaranteed.
						</div>
					</div>
				</div>
			)}
		</>
	);
};
