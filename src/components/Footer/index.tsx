import React, { FC } from "react";
import Link from "next/link";

import { Wrapper } from "../../styles/components/Footer";

const Footer: FC = () => (
	<Wrapper>
		<Link href="/map" as="/map" passHref>
			<a>Test</a>
		</Link>
	</Wrapper>
);

export default Footer;
