import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddressPage } from "../components/address-page/AddressPage";
import { NewAddress } from "../components/address-page/NewAddress";
import Cart from "../page/Cart";
import { LandingPageComponents } from "../components/landingPage/LandingPageComponents";
import { Payment } from "../components/Payment/Payment";
import { Shipment } from "../components/Shipment/Shipment";
import { Wellbeing } from "../WellbeingComponents/Wellbeing";

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


				<Route path="/cart/payment/all/wallet" element={<Payment />}></Route>

				<Route path="/cart/select-shipment" element={<Shipment />}></Route>
				<Route path="/category/wellbeing-nutrition" element={<Wellbeing /> } />

			</Routes>
		</div>
	);
};
