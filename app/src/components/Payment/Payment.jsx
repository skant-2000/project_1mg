import React, { useState } from "react";
import { AddressNavbar } from "../address-page/AddressNavbar";
import { CardsComponent } from "./CardsComponent";
import styles from "./payment.module.css";
import { PodComponent } from "./PodComponent";
import { UpiComponent } from "./UpiComponent";
import { useNavigate } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const Payment = () => {
	const navigate = useNavigate();

	const [upi, setUpi] = useState(true);
	const [cards, setCards] = useState(false);
	const [pod, setPod] = useState(false);
	const handleUPI = () => {
		setUpi(true);
		setCards(false);
		setPod(false);
	};
	const handleCards = () => {
		setUpi(false);
		setCards(true);
		setPod(false);
	};

	const handlePOD = () => {
		setUpi(false);
		setCards(false);
		setPod(true);
	};

	const handleverifypayment = () => {
		alert("Payment Sucessfully!");
		navigate("/");
	}
	let totalSp = JSON.parse(localStorage.getItem("totalSp"));
	let totalMrp = JSON.parse(localStorage.getItem("totalMrp"));
	let discount = JSON.parse(localStorage.getItem("discount"));
	return (
		<div style={{ backgroundColor: "#f4f4f4", height: "fit-content" }}>
			<AddressNavbar />

			<div className={styles.root}>
				<div className={styles.nameAndDetailMain}>
					<div className={styles.bg}>
						{upi ? (
							<div
								style={{ backgroundColor: "white" }}
								className={styles.forflex1M}
								onClick={handleUPI}
							>
								<div className={styles.forflex2}>
									<img
										className={styles.img}
										src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581576219/marketing/p0w0w4crcgcthkom8j23.png"
										alt=""
									/>
								</div>
								<div>UPI</div>
							</div>
						) : (
							<div
								className={styles.forflex1M}
								onClick={handleUPI}
							>
								<div className={styles.forflex2}>
									<img
										className={styles.img}
										src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581576219/marketing/p0w0w4crcgcthkom8j23.png"
										alt=""
									/>
								</div>
								<div>UPI</div>
							</div>
						)}

						{cards ? (
							<div
								style={{ backgroundColor: "white" }}
								className={styles.forflex2M}
								onClick={handleCards}
							>
								<div className={styles.forflex22}>
									<img
										className={styles.img2}
										src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172186/marketing/p45zk16fua8dmxany3up.png"
										alt=""
									/>
								</div>
								<div>CARDS</div>
							</div>
						) : (
							<div
								className={styles.forflex2M}
								onClick={handleCards}
							>
								<div className={styles.forflex22}>
									<img
										className={styles.img2}
										src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172186/marketing/p45zk16fua8dmxany3up.png"
										alt=""
									/>
								</div>
								<div>CARDS</div>
							</div>
						)}

						{pod ? (
							<div
								style={{ backgroundColor: "white" }}
								className={styles.forflex3M}
								onClick={handlePOD}
							>
								<div className={styles.forflex23}>
									<img
										className={styles.img3}
										src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172202/marketing/pyzcsicqsnwawi4yrpo7.png"
										alt=""
									/>
								</div>
								<div>PAY ON DELIVERY</div>
							</div>
						) : (
							<div
								className={styles.forflex3M}
								onClick={handlePOD}
							>
								<div className={styles.forflex23}>
									<img
										className={styles.img3}
										src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172202/marketing/pyzcsicqsnwawi4yrpo7.png"
										alt=""
									/>
								</div>
								<div>PAY ON DELIVERY</div>
							</div>
						)}
					</div>
					<div>{upi && <UpiComponent />}</div>
					<div>{cards && <CardsComponent />}</div>
					<div>{pod && <PodComponent />}</div>
				</div>

				<div className={styles.rightMain}>
					<div className={styles.whitebg}>
						<div
							style={{
								alignItems: "center",
								display: "flex",
								gap: "20px",
							}}
						>
							<img
								style={{
									height: "15px",
									width: "15px",
									alignItems: "center",
									display: "flex",
								}}
								src="https://res.cloudinary.com/du8msdgbj/image/upload/v1609235175/rwfhtgwtk8zmnbwdvfme.png"
								alt=""
							/>
						</div>
						<div>
							Pay with Paytm Postpaid or Paytm wallet on Tata 1mg
							for ₹999 or more and get 4000 cashback...
						</div>
					</div>
					<div className={styles.whitebg2}>
						<div className={styles.showAllText}>
							SHOW ALL PAYMENT OFFERS
						</div>
						<ArrowForwardIosIcon
							sx={{ fontSize: "15px", color: "#ff6f61" }}
						/>
					</div>

					<div className={styles.whitebg3}>
						<div className={styles.earned}>
							<span
								style={{
									fontSize: "16px",
									fontWeight: "bold",
									color: "black",
								}}
							>
								9
							</span>{" "}
							<span
								style={{
									fontSize: "16px",
									letterSpacing: "1px",
									color: "black",
								}}
							>
								NeuCoins
							</span>{" "}
							to be earned on this order*
						</div>
					</div>

					<div className={styles.fourMain}>
						<div className={styles.whitebg4}>
							<div className={styles.forflex}>
								<div className={styles.forGapHeight}>
									Item Total(MRP)
								</div>
								<div>₹{totalMrp}</div>
							</div>
							<div className={styles.forflex}>
								<div>Price Discount</div>
								<div>-₹{discount}</div>
							</div>

							<div className={styles.line}></div>

							<div className={styles.forflex}>
								<div className={styles.forGapHeight}>
									Shipping Fee
								</div>
								<div>₹0</div>
							</div>

							<div>
								<button className={styles.freeShipWant}>
									Want Free Shipping?
								</button>
							</div>

							<div className={styles.line}></div>

							<div className={styles.forflex}>
								<div
									style={{
										fontWeight: "600",
										color: "rgb(87, 83, 83)",
									}}
								>
									To be paid
								</div>
								<div
									style={{
										fontWeight: "600",
										color: "rgb(87, 83, 83)",
									}}
								>
									₹{totalSp}
								</div>
							</div>
						</div>
						<div className={styles.forflex12}>
							<div className={styles.totalsaving}>
								Total Savings
							</div>
							<div className={styles.total}>₹{ discount }</div>
						</div>
					</div>
					<div>
						<button
							onClick={handleverifypayment}
							className={styles.verigyAndPaybtn}
						>
							MAKE PAYMENT
						</button>
					</div>
				</div>
			</div>
			<div className={styles.bottomflex}>
				<div>
					<div className={styles.line2}></div>
					<div>
						Tata 1mg is a technology platform to facilitate
						transaction of business. The products and services are
						offered for sale by the sellers. The user authorizes the
						delivery personel to be his agent for delivery of the
						goods. For details read terms and conditions.
					</div>
				</div>

				<div>
					<div className={styles.line2}></div>
					<div>
						<div>
							*NeuCoins will be credited 7 days after your
							complete order is delivered in case of Products and
							in case of Lab Services NeuCoins will be credited
							within 24 hours from the time of generation of test
							report. NeuCoins will not be credited in case a
							return request is initiated for the order. NeuCoins
							are rounded to the nearest integer and the value of
							NeuCoins earned may change if total order value
							changes.
						</div>
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
