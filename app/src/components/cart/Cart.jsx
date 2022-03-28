import React from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
	const navigate = useNavigate();
	const handleRedirectToSummary = () => {
		const data = JSON.parse(localStorage.getItem("cart"));
		if (data) {
			navigate("/cart/address-page/page");
		} else {
			navigate("/cart/address-page");
		}
	};
	return (
		<div>
			<button onClick={handleRedirectToSummary}>checkout</button>
		</div>
	);
};
