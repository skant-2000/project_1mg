import React from "react";
import { useNavigate } from "react-router-dom";
import { AddressNavbar } from "./AddressNavbar";
import { ListAddress } from "./ListAddress";
import {v4 as uuid} from "uuid"
import styles from "./newAddress.module.css";
export const NewAddress = () => {
	const navigate = useNavigate()
	const cart = JSON.parse(localStorage.getItem("cart"));
	const handleAddNewAddBtn = () => {
		navigate("/cart/address-page")
	}
	const handleContinue = () => {
		navigate("/cart/select-shipment");
	}
	return (
		<div id={styles.bosy}>
			<div className={styles.navbar}>
				<AddressNavbar />
			</div>

			<div>
				<div>
					{cart.map((el) => {
						return <ListAddress el={el} key={uuid()} />;
					})}
				</div>
			</div>

			<div>
				<button
					className={styles.addNewAddBtn}
					onClick={handleAddNewAddBtn}
				>
					+ ADD NEW ADDRESS
				</button>
			</div>
			<div>
				<button className={styles.addContBtn} onClick={handleContinue}>CONTINUE</button>
			</div>

			<div className={styles.textAndLineMain}>
				<div>
					<div className={styles.line}></div>
					<p>
						Tata 1mg is a technology platform to facilitate
						transaction of business. The products and services are
						offered for sale by the sellers. The user authorizes the
						delivery personel to be his agent for delivery of the
						goods. For details read{" "}
						<span style={{ color: "rgb(255, 111, 97)" }}>
							{" "}
							terms and conditions.
						</span>
					</p>
				</div>
				<div>
					<div className={styles.line}></div>
					<div>
						<p>
							*NeuCoins will be credited 7 days after your
							complete order is delivered in case of Products and
							in case of Lab Services NeuCoins will be credited
							within 24 hours from the time of generation of test
							report. NeuCoins will not be credited in case a
							return request is initiated for the order. NeuCoins
							are rounded to the nearest integer and the value of
							NeuCoins earned may change if total order value
							changes.
						</p>
						<p>
							**Coupon Discount value may change if the total
							order value changes.
						</p>
						<p>
							***Items in your cart will always reflect the most
							recent price as compared to the prices in their
							product detail page.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
