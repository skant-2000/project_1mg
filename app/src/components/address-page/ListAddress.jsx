import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./newAddress.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../contextAPI/AddressContext";
export const ListAddress = ({ el }) => {
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
	const [dropIssue, setDropIssue] = useState(false);
	let [obj, setObj] = useState({})
	const navigate = useNavigate()
	const [id, setId] = useState("");
	const handleDropIssue = (e) => {
		var all =
			e.currentTarget.parentNode.parentNode.childNodes[0].childNodes[1];
		// console.log(all);
		var id =
			e.currentTarget.parentNode.parentNode.childNodes[0].childNodes[1]
				.childNodes[0].innerHTML;
		setId(id);
		var home =
			e.currentTarget.parentNode.parentNode.childNodes[0].childNodes[1]
				.childNodes[1].innerHTML;
		var name =
			e.currentTarget.parentNode.parentNode.childNodes[0].childNodes[1]
				.childNodes[2].innerHTML;
		var mobile =
			e.currentTarget.parentNode.parentNode.childNodes[0].childNodes[1]
				.childNodes[3].innerHTML;
		var flat =
			e.currentTarget.parentNode.parentNode.childNodes[0].childNodes[1]
				.childNodes[4].innerHTML;
		var city =
			e.currentTarget.parentNode.parentNode.childNodes[0].childNodes[1]
				.childNodes[5].innerHTML;
		obj = {}
		obj.id = id;
		obj.addtype = home;
		obj.customerName = name;
		obj.mobile = mobile;
		obj.address = flat;
		obj.city = city;

		setObj({ id: id, addtype: home, customerName: name, mobile:mobile, address: flat, city: city});
		// obj.flat = ans.flat.innerHTML
		console.log(obj);
		setDropIssue(!dropIssue);
	};

	// console.log(obj);
	// const navigateToCart = useNavigate();
	const handleClick = (e) => {
		var selectAddress = {};
		var id = e.currentTarget.parentNode.parentNode.childNodes[1];

		selectAddress.id = id.childNodes[0].innerHTML;
		selectAddress.addtype = id.childNodes[1].innerHTML;
		selectAddress.customerName = id.childNodes[2].innerHTML;
		selectAddress.mobile = id.childNodes[3].innerHTML;
		selectAddress.address = id.childNodes[4].innerHTML;
		selectAddress.city = id.childNodes[5].innerHTML;
		// console.log(selectAddress);
		localStorage.setItem("selectAddress", JSON.stringify(selectAddress));
	};


	const handleEditItem = (e) => {
		navigate("/cart/address-page")
		var cart = JSON.parse(localStorage.getItem("cart"));
		// console.log(cart);
		var notMatch = cart.filter(el => {
			return el.id !== obj.id
		})
		var match = cart.filter((el) => {
			return el.id === obj.id;
		});
		console.log(notMatch);
		console.log(match);

		// console.log(match[0].flat);
		data.customerName = match[0].customerName;
		data.id = match[0].id;
		data.city = match[0].city;
		data.mobile = match[0].mobile;
		data.flat = match[0].flat;
		data.addtype = match[0].addtype;
		data.pincode = match[0].pincode;
		data.state = match[0].state;
		console.log(data);
		cart = JSON.parse(localStorage.setItem("cart", JSON.stringify(notMatch)));
		window.location.reload(false);

	};
	const handleDeleteItem = () => {
		var cart = JSON.parse(localStorage.getItem("cart"));
		// console.log(id);
		var filter = cart.filter((el) => {
			return id !== el.id;
		});
		localStorage.setItem("cart", JSON.stringify(filter));
		window.location.reload(false);
	};
	return (
		<>
			<div key={uuid()} className={styles.addressListMain}>
				<div className={styles.forradioandlist}>
					<div>
						<button
							className={styles.radiobtn}
							onClick={handleClick}
						></button>
					</div>
					<div>
						<div style={{ display: "none" }}>{el.id}</div>
						<div className={styles.addtype}>{el.addtype}</div>
						<div className={styles.name}>{el.customerName}</div>
						<div className={styles.name}>{el.mobile}</div>
						<div className={styles.name}>{el.flat}</div>
						<div className={styles.name}>
							{el.city}, {el.state} - {el.pincode}
						</div>
					</div>
				</div>
				<div>
					{/* <LongMenu handleDeleteItem={handleDeleteItem} /> */}
					<MoreVertIcon color="action" onClick={handleDropIssue} />
				</div>
			</div>
			{dropIssue === true ? (
				<>
					<div
						className={styles.dropdownContent}
						style={{ visibility: "visible" }}
					>
						<button
							className={styles.loProfile}
							onClick={handleEditItem}
						>
							Edit
						</button>
						<button
							className={styles.loLogOut}
							onClick={handleDeleteItem}
						>
							Delete
						</button>
					</div>
				</>
			) : (
				<div></div>
			)}
		</>
	);
};
