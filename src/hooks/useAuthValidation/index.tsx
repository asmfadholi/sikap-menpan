import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// hooks
import { useAuthStates } from "contexts/Auth";

const useAuthValidation = () => {
	const { replace, events } = useRouter();
	const { isLoggedIn, dispatch, setLoading, loading } = useAuthStates();
	const [isFirst, setIsFirst] = useState(true);

	useEffect(() => {
		const isLoggedInState = Boolean(localStorage.getItem("auth"));
		if (isFirst) {
			events.on("routeChangeComplete", () => setLoading(false));
			setTimeout(() => {
				dispatch({ type: isLoggedInState ? "login" : "logout" });
				if (!isLoggedInState) {
					replace("/login");
				} else {
					setLoading(false);
				}
			}, 500);
			setIsFirst(false);
		}
	}, []);

	return {
		loading,
		isLoggedIn,
		setLoading,
	};
};

export default useAuthValidation;
