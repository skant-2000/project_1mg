import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthContext";
import styles from "./cartBtn.module.css"
export const CartBtn = () => {
	const navigate = useNavigate();
	 const { auth } = useContext(AuthContext);
	const handleRedirectToSummary = () => {
		const data = JSON.parse(localStorage.getItem("cart"));
		// if (!auth) {
		// 	alert("Please Login to Proceed!");
		// 	console.log(auth);
		// 	return;
		// } 

		if (data) {
			navigate("/cart/address-page/page");
		} else {
			navigate("/cart/address-page");
		}
	};
	return (
		<div>
			<button className={styles.btn} onClick={handleRedirectToSummary}>
				CHECKOUT
			</button>
		</div>
	);
};
