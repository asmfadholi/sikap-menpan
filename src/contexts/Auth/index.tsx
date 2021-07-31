import React, { useContext, useReducer, useState } from "react";
import reducer from "./reducer";

export const AuthContext = React.createContext({});

const initialState = { isLoggedIn: false };

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [loading, setLoading] = useState(true);
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: state.isLoggedIn,
				dispatch,
				loading,
				setLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthStates = () => useContext(AuthContext);
export default AuthProvider;
