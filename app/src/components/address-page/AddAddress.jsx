import React, { useContext, useState } from "react";
import styles from "./addAddress.module.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AddressContext } from "../../contextAPI/AddressContext";
export const AddAddress = () => {
	const {
		addtype,
		setAddtype,
		save,
		setSave,
		handleData,
		handleSave,
		data,
		handleCancel,
	} = useContext(AddressContext);
	// const navigate = useNavigate();
	// const [addtype, setAddtype] = useState("");

	// const [save, setSave] = useState([]);

	// const [data, setData] = useState({});

	// const handleData = (e) => {
	// 	const { name, value } = e.currentTarget;

	// 	setData({
	// 		...data,
	// 		id: uuid(),
	// 		[name]: value,
	// 	});
	// };
	// const handleCancel = () => {
	// 	const isValue = JSON.parse(localStorage.getItem("cart"));
	// 	if (isValue.length !== 0) {
	// 		navigate("/cart/address-page/page");
	// 	}
	// };

	// const handleSave = () => {
	// 	//const check = JSON.parse(localStorage.getItem("save"));
	// 	// save.push(data);
	// 	// console.log(save);
	// 	// setSave([...check,data]);
	// 	// setSave([ ...save , data]);
	// 	// setSave([...save, data]);
	// 	var cart = JSON.parse(localStorage.getItem("cart"));

	// 	if (cart === null) {
	// 		cart = [];
	// 		localStorage.setItem("cart", JSON.stringify(cart));
	// 	}

	// 	cart.push(data);
	// 	localStorage.setItem("cart", JSON.stringify(cart));
	// 	// let save = [];
	// 	// localStorage.setItem("data", JSON.stringify(data));
	// 	// localStorage.setItem("save", JSON.stringify(save.push(JSON.stringify(data))));

	// 	navigate("/cart/address-page/page");
	// };

	//console.log(addtype);

	return (
		<div id={styles.bosy}>
			<div className={styles.bg}>
				<div className={styles.addnewaddtext}>Add New Address</div>

				<div className={styles.formOuter}>
					<div>
						<input
							name="flat"
							className={styles.flatnum}
							type="text"
							placeholder="Flat Number, Building Name, Street/Locality"
							value={data.flat}
							onChange={handleData}
							required
						/>
					</div>
					<div>
						<input
							name="landmark"
							className={styles.landmark}
							type="text"
							placeholder="Landmark (optional)"
							value={data.landmark}
							onChange={handleData}
						/>
					</div>
					<div>
						<input
							name="pincode"
							className={styles.landmark}
							type="text"
							placeholder="Pincode"
							value={data.pincode}
							onChange={handleData}
							required
						/>
					</div>
					<div>
						<input
							name="locality"
							className={styles.landmark}
							type="text"
							placeholder="Locality"
							value={data.locality}
							onChange={handleData}
						/>
					</div>
					<div>
						<input
							name="city"
							className={styles.landmark}
							type="text"
							placeholder="City"
							value={data.city}
							onChange={handleData}
							required
						/>
					</div>
					<div>
						<input
							name="state"
							className={styles.landmark}
							type="text"
							placeholder="State"
							value={data.state}
							onChange={handleData}
							required
						/>
					</div>
					<div>
						<input
							name="customerName"
							className={styles.landmark}
							type="text"
							placeholder="Customer Name"
							value={data.customerName}
							onChange={handleData}
							required
						/>
					</div>
					<div>
						<input
							name="mobile"
							className={styles.landmark}
							type="text"
							placeholder="10 Digit Mobile Number"
							value={data.mobile}
							onChange={handleData}
							required
						/>
					</div>

					<div className={styles.radioMain}>
						<div className={styles.radioBtn}>
							<div>
								<input
									type="radio"
									value="HOME"
									name="addtype"
									checked={data.value}
									onChange={handleData}
								/>
							</div>
							<div>HOME</div>
						</div>
						<div className={styles.radioBtn}>
							<div>
								<input
									type="radio"
									value="OFFICE"
									name="addtype"
									checked={data.value}
									onChange={handleData}
								/>
							</div>
							<div>OFFICE</div>
						</div>
						<div className={styles.radioBtn}>
							<div>
								<input
									type="radio"
									value="OTHER"
									name="addtype"
									checked={data.value}
									onChange={handleData}
								/>
							</div>
							<div>OTHERS</div>
						</div>
					</div>

					<div className={styles.btnMain}>
						<button
							className={styles.cancelbtn}
							onClick={handleCancel}
						>
							CANCEL
						</button>
						<button className={styles.savebtn} onClick={handleSave}>
							SAVE
						</button>
					</div>
				</div>
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
