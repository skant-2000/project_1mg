import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddressPage } from "../components/address-page/AddressPage";
import { NewAddress } from "../components/address-page/NewAddress";
import { Cart } from "../components/cart/Cart";
import { LandingPageComponents } from "../components/landingPage/LandingPageComponents";
import { Shipment } from "../components/Shipment/Shipment";

export const RouteComponents = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LandingPageComponents />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
				<Route
					path="/cart/address-page"
					element={<AddressPage />}
				></Route>
				<Route
					path="/cart/address-page/page"
					element={<NewAddress />}
				></Route>

				<Route path="/cart/select-shipment" element={<Shipment />}></Route>
			</Routes>
		</div>
	);
};
