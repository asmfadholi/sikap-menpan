import { useEffect, useState } from "react";
import Head from "next/head";
import "antd/dist/antd.css";

function HeadComponent() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<Head>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				rel="preload"
				as="style"
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				media={isLoaded ? "all" : "print"}
			/>
			<noscript>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				/>
			</noscript>
		</Head>
	);
}

export default HeadComponent;
