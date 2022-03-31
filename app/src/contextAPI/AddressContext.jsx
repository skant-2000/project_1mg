import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid"
export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
    const navigate = useNavigate();
	const [addtype, setAddtype] = useState("");

	const [save, setSave] = useState([]);

	const [data, setData] = useState({});

	const handleData = (e) => {
		const { name, value } = e.currentTarget;

		setData({
			...data,
			id: uuid(),
			[name]: value,
		});
	};
	const handleCancel = () => {
		const isValue = JSON.parse(localStorage.getItem("cart"));
		if (isValue.length !== 0) {
			navigate("/cart/address-page/page");
		}
	};

	const handleSave = () => {
		//const check = JSON.parse(localStorage.getItem("save"));
		// save.push(data);
		// console.log(save);
		// setSave([...check,data]);
		// setSave([ ...save , data]);
		// setSave([...save, data]);
		var cart = JSON.parse(localStorage.getItem("cart"));

		if (cart === null) {
			cart = [];
			localStorage.setItem("cart", JSON.stringify(cart));
		}

		cart.push(data);
		localStorage.setItem("cart", JSON.stringify(cart));
		// let save = [];
		// localStorage.setItem("data", JSON.stringify(data));
		// localStorage.setItem("save", JSON.stringify(save.push(JSON.stringify(data))));
		setData({})
		navigate("/cart/address-page/page");
	};

	console.log(addtype);

	return (
		<AddressContext.Provider
			value={{
				addtype,
				setAddtype,
				save,
				setSave,
				handleData,
				handleSave,
				data,
				handleCancel,
			}}
		>
			{children}
		</AddressContext.Provider>
	);
};
