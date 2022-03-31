import React, { useState } from "react";
import styles from "./cardsComponent.module.css";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const CardsComponent = () => {
	const navigate = useNavigate();

	const [cardNum, setCardNum] = useState("");
	const [mm, setMm] = useState("");
	const [yy, setYy] = useState("");
	const [cvv, setCvv] = useState("");
	const [name, setName] = useState("");

	const handlePayCard = () => {
		if (
			cardNum.length === 16 &&
			mm.length === 2 &&
			yy.length === 2 &&
			cvv.length === 3
		) {
			alert("Payment Sucessfully!");
			navigate("/");
		} else {
			alert("Payment Failed!");
		}
  };
  // var input = document.getElementById("input");
	// const onKeyPressed = () => {
	// 	if (input.value.length > 0) {
	// 		if (input.value.length % 4 === 0) {
	// 			input.value += "    ";
  //     }
	// 	}
	// };
  //   const handleSpace = (e) => {
	// 	if (e.length === 4) {
	// 		setCardNum(" ");
	// 	}
	// };
	return (
		<>
			<div className={styles.cardContainer}>
				<div className={styles.credit}>Credit & Debit Cards</div>
				<div className={styles.addnew}>Add New Card For Payment</div>

				<div className={styles.cardNum}>Card Number</div>
				<input

					value={cardNum}
					onChange={(e) => setCardNum(e.currentTarget.value)}
					className={styles.xxx}
					type="text"
					placeholder="xxxx xxxx xxxx xxxx"
				/>

				<div className={styles.flexboxing}>
					<div style={{ width: "250px" }}>
						<div className={styles.cardNum}>
							Expiry Date (MM/YY)
						</div>
						<div className={styles.forPadding}>
							<input
								value={mm}
								onChange={(e) => setMm(e.currentTarget.value)}
								className={styles.mm}
								type="text"
								placeholder="MM"
							/>
							<span className={styles.slash}>/</span>
							<input
								value={yy}
								onChange={(e) => setYy(e.currentTarget.value)}
								className={styles.mm}
								type="text"
								placeholder="YY"
							/>
						</div>
					</div>

					<div>
						<div className={styles.cardNum}>Security code</div>
						<input
							value={cvv}
							onChange={(e) => setCvv(e.currentTarget.value)}
							className={styles.cvv}
							type="text"
							placeholder="CVV"
						/>
					</div>
				</div>
				<input
					value={name}
					onChange={(e) => setName(e.currentTarget.value)}
					className={styles.xxx}
					type="text"
					placeholder="Name on card"
				/>
			</div>

			<div>
				<div>
					<Checkbox
						{...label}
						defaultChecked
						sx={{
							color: pink[200],
							"&.Mui-checked": {
								color: pink[300],
							},
						}}
						size="large"
						checked={true}
					/>
				</div>

				<div
					style={{
						fontSize: "14px",
						paddingLeft: "10px",
						paddingRight: "10px",
					}}
				>
					Your card details will be saved securely for future
					transactions, based on the industry standards.
				</div>
				<div className={styles.btnforcardsMain}>
					<button
						className={styles.btnforcards}
						onClick={handlePayCard}
					>
						MAKE PAYMENT
					</button>
				</div>
			</div>
		</>
	);
};
