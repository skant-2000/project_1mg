import React from "react";
import { FooterMain } from "./footerMain/FooterMain";
import { FooterPara } from "./footerPara/FooterPara";
import { GetLink } from "./getLink/GetLink";
import { Platform } from "./healthCarePlatform/Platform";
import { Certified } from "./RSA/Certified";
import { EndFooter } from "./RSA/EndFooter";
import { KnowMoreAbout } from "./RSA/KnowMoreAbout";
import { Rsa } from "./RSA/Rsa";

export const FooterComponents = () => {
	return (
		<div>
			<FooterPara />
			<Platform />
			<GetLink />
			<FooterMain />
			<Rsa />
			<Certified />
			<KnowMoreAbout />
			<EndFooter />
		</div>
	);
};
