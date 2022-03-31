import React, { useState } from "react";
import styles from "./upiComponent.module.css";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export const UpiComponent = () => {
	const [upiValue, setUpiValue] = useState("");
	const navigate = useNavigate();
	const handleVerify = () => {
		if (upiValue.includes("@")) {
			alert("Payment Sucessfully!");
			navigate("/");
		} else {
			alert("Payment Failed!");
		}
	};

	return (
		<div className={styles.upiMain}>
			<div className={styles.upiTransferMoney}>
				Transfer money from your bank account using your UPI app
			</div>

			<div className={styles.imgAndWEacceptMain}>
				<div style={{ fontSize: "14px", color: "#333" }}>
					We accept{" "}
				</div>
				<div>
					<img
						className={styles.imagesUPI}
						src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595473/marketing/pusi6g59xoxcyevsihmm.png"
						alt=""
					/>
				</div>
				<div>
					<img
						className={styles.imagesUPI}
						src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595522/marketing/uwfgfsxaq3i9m9aglqsc.png"
						alt=""
					/>
				</div>
				<div>
					<img
						className={styles.imagesUPI}
						src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595567/marketing/i0yoaxd0mbcc9jdzyjrq.png"
						alt=""
					/>
				</div>
				<div>
					<img
						className={styles.imagesUPI}
						src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto,w_107,h_57/v1581508161/marketing/zhcu7wuhtxelq710o4bc.jpg"
						alt=""
					/>
				</div>
			</div>

			<div className={styles.line}></div>

			<div className={styles.savedUpi}>Saved UPI ID</div>

			<div className={styles.payViaUpi}>Pay via new UPI ID</div>

			<div style={{ marginBottom: "10px" }}>
				<input
					value={upiValue}
					onChange={(e) => setUpiValue(e.currentTarget.value)}
					type="text"
					placeholder="Ex: mobilenumber@upi"
					className={styles.inputBoxUpi}
				/>
			</div>
			<div className={styles.format}>
				The UPI ID is in the format of name/phone number@bankname
			</div>

			<div className={styles.checkboxAndText}>
				<div>
					<Checkbox
						{...label}
						defaultChecked
						sx={{
							color: pink[500],
							"&.Mui-checked": {
								color: pink[400],
							},
						}}
						size="medium"
						checked={true}
					/>
				</div>
				<div className={styles.securely}>
					Securely save this VPA for faster checkout next time
				</div>
			</div>

			<div>
				<button onClick={handleVerify} className={styles.verifyBtn}>
					VERIFY & PAY
				</button>
			</div>
		</div>
	);
};
