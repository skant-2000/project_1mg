import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
    const navigate = useNavigate()
	const [save, setSave] = useState([]);
	const [addtype, setAddtype] = useState("");


	const [data, setData] = useState({});

	const handleData = (e) => {
		const { name, value } = e.currentTarget;

		setData({
			...data,
			[name]: value,
		});
	};
	const handleCancel = () => {
		const isValue = JSON.parse(localStorage.getItem("save"));
		if (isValue.length !== 0) {
			navigate("/cart/address-page/page");
		}
	};

	const handleSave = () => {
		save.push(data);
		setSave(save);
		localStorage.setItem("data", JSON.stringify(data));
		localStorage.setItem("save", JSON.stringify(save));

		navigate("/cart/address-page/page");
	};

	return (
		<AddressContext.Provider
			value={{
				handleSave,
				save,
				data,
				handleCancel,
				addtype,
				handleData,
			}}
		>
			{children}
		</AddressContext.Provider>
	);
};
