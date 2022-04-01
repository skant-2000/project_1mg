import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./navbar.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Login from "../compoLogin/Login";
import Signup from "../compoLogin/signup";
import { AuthContext } from "../../contextAPI/AuthContext";
import {useNavigate} from "react-router-dom"
export const Navbar = () => {
	const { auth, setAuth } = useContext(AuthContext);
	const navigate = useNavigate()
	const handleNavToCart = () => {
		navigate("/cart")
	}
console.log(auth);
	return (
		<div style={{backgroundColor: "white"}}>
			<section>
				<div className={styles.forBoxShadow}>
					<div className={styles.navbar1Root}>
						<div>
							<button>
								<img
									className={styles.mgimg}
									src="https://www.1mg.com/images/tata_1mg_logo.svg"
									alt=""
								/>
							</button>
						</div>
						<div>
							<button className={styles.medicine}>
								MEDICINES
							</button>
						</div>
						<div className={styles.labTestFlex}>
							<button className={styles.labtests}>
								LAB TESTS
							</button>
							<div
								style={{
									backgroundColor: "#ff6f61",
									fontSize: "12px",
									color: "white",
									padding: "1px 3px 1px 3px",
									fontWeight: "bold",
								}}
							>
								SAFE
							</div>
						</div>
						<div>
							<button className={styles.askDoctor}>
								ASK DOCTOR
							</button>
						</div>
						<div>
							<button className={styles.askDoctor}>
								COVID-19
							</button>
						</div>
						<div>
							<button className={styles.askDoctor}>
								AYURVEDA
							</button>
						</div>
						<div className={styles.labTestFlex}>
							<button className={styles.labtests}>
								CARE PLAN
							</button>
							<div
								style={{
									backgroundColor: "#ff6f61",
									fontSize: "12px",
									color: "white",
									padding: "1px 5px 1px 5px",
									fontWeight: "bold",
								}}
							>
								SAVE MORE
							</div>
						</div>
						{!auth ? <div style={{display: "flex"}}>
							{/* <button>Login |</button> */}
							<Login />
							<Signup />
							{/* <button>Sign Up</button> */}
						</div>: <button onClick={() =>setAuth(!auth)} style={{backgroundColor:"transparent", border: "none"}}>Logout</button>}
						<div>
							<button>Offers</button>
						</div>
						<div>
							<button onClick={handleNavToCart}>
								<ShoppingCartOutlinedIcon />
							</button>
						</div>
						<div>
							<button>Need Help?</button>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.navbar2RootMain}>
				<div className={styles.navbar2Root}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "3px",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								height: "35px",
								backgroundColor: "#f1f4f6",
							}}
						>
							<LocationOnIcon
								sx={{ fontSize: 17, color: "disabled" }}
								className={styles.locationLogo}
							/>
							<input
								className={styles.cityInput}
								type="text"
								placeholder="Enter Your City"
							/>
							<MyLocationIcon
								sx={{ fontSize: 15, color: "disabled" }}
								className={styles.locationLogo}
								style={{ paddingRight: "7px" }}
							/>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								height: "35px",
								backgroundColor: "#f1f4f6",
							}}
						>
							<input
								className={styles.searchInput}
								type="text"
								placeholder="Search For Medicines and Health Products"
							/>
							<SearchIcon
								sx={{ fontSize: 17, color: "disabled" }}
								className={styles.locationLogo}
								style={{ paddingRight: "7px" }}
							/>
						</div>
					</div>
					<div>
						<img src="svg/s.svg" alt="" />
					</div>
					<div
						style={{
							display: "flex",
							gap: "10px",
							alignItems: "center",
						}}
					>
						<div>
							<div className={styles.quickBuy}>
								QUICK BUY! Flat 25% off
							</div>
							<div className={styles.quickBuy}>on medicines*</div>
						</div>
						<div>
							<button className={styles.upload}>Upload</button>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className={styles.navbar3Root}>
					<div>
						<div className={styles.arrowAndText}>
							<div className={styles.healthText}>
								Health Resource Center
							</div>
							<KeyboardArrowDownIcon
								className={styles.healthText}
								sx={{ fontSize: "20px" }}
							/>
						</div>
					</div>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>
							Covid Essentials
						</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>Featured</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>
							Vitamins & Nutrition
						</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>Diabetes</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>
							Healthcare Devices
						</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>Personal Care</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>
							Health Conditions
						</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
				</div>

				<div className={styles.navbar3Root}>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>
							Ayurveda Products
						</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
					<div className={styles.arrowAndText}>
						<div className={styles.healthText}>Homeopathy</div>
						<KeyboardArrowDownIcon
							className={styles.healthText}
							sx={{ fontSize: "20px" }}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};
