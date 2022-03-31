import React from "react";
import { SimpleNavbar } from "./SimpleNavbar";
import styles from "./shipment.module.css";
import { useNavigate } from "react-router-dom";
export const Shipment = () => {
	const navigate = useNavigate();
	let selectAddress = JSON.parse(localStorage.getItem("selectAddress"));
	console.log(selectAddress);
	const handleChange = () => {
		navigate("/cart/address-page/page");
	};
	const handleContinueToPayment = () => {
		navigate("/cart/payment/all/wallet");
	};
	return (
		<>
			<SimpleNavbar />
			<div className={styles.bg}>
				<div className={styles.main}>
					<div>
						<div className={styles.chooseText}>
							Choose delivery option(s)
						</div>
						<div className={styles.box}>
							<div className={styles.speed}>
								Choose a delivery speed
							</div>
							<div className={styles.radioAndDateContainer}>
								<div>
									<input
										type="radio"
										name="btn"
										checked={true}
									/>
								</div>
								<div>Between 1 April - 3 April</div>
							</div>
						</div>
					</div>

					<div className={styles.container2}>
						<div className={styles.selectAddChangeMain}>
							<div style={{ letterSpacing: "1px" }}>
								Select Address
							</div>
							<button
								className={styles.changebtn}
								onClick={handleChange}
							>
								CHANGE
							</button>
						</div>

						<div>
							<div className={styles.listMain}>
								<div className={styles.addtype}>
									{selectAddress.addtype}
								</div>
								<div className={styles.name}>
									{selectAddress.customerName}
								</div>
								<div className={styles.name}>
									{selectAddress.mobile}
								</div>
								<div className={styles.name}>
									{selectAddress.address}
								</div>
								<div className={styles.name}>
									{selectAddress.city}
								</div>
							</div>
						</div>
						<div>
							<button
								className={styles.conbtn}
								onClick={handleContinueToPayment}
							>
								CONTINUE
							</button>
						</div>
						<div>
							<div className={styles.line}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
