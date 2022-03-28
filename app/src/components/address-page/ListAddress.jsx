import React, { useState } from "react";
import LongMenu from "./LongMenu";
import { v4 as uuid } from "uuid";
import styles from "./newAddress.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export const ListAddress = ({ el }) => {
	const [dropIssue, setDropIssue] = useState(false);
	const handleDropIssue = () => {
		setDropIssue(!dropIssue);
	};
	// const navigateToCart = useNavigate();
	const handleClick = (e) => {
		var selectAddress = {};
		var id = e.currentTarget.parentNode.parentNode.childNodes[1];

		selectAddress.id = id.childNodes[0].innerHTML;
		selectAddress.addtype = id.childNodes[1].innerHTML;
		selectAddress.customerName = id.childNodes[2].innerHTML;
		selectAddress.mobile = id.childNodes[3].innerHTML;
		selectAddress.address = id.childNodes[4].innerHTML;

		console.log(selectAddress);

		localStorage.setItem("selectAddress", JSON.stringify(selectAddress));
	};
	const handleEditItem = () => {
		
	}
	const handleDeleteItem = (e) => {
		var cart = JSON.parse(localStorage.getItem("cart"));
		console.log(cart);
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
						<div style={{ display: "none" }}>{uuid()}</div>
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
