import { ThemeProvider } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";

// components
import Layouts from "components/Layouts";
import HeadComponent from "components/Head";

// contexts
import AuthProvider from "contexts/Auth";

//styles
import "antd/dist/antd.css";

function App({ Component, pageProps }) {
	return (
		<>
			<HeadComponent />
			<ThemeProvider theme={theme}>
				{globalStyles}
				<AuthProvider>
					<Layouts>
						<Component {...pageProps} />
					</Layouts>
				</AuthProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
