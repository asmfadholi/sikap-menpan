import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

// hooks
import { useAuthStates } from "contexts/Auth";

const urlsIgnore = ["/login"];

const useAuthValidation = () => {
	const { replace, events, pathname } = useRouter();
	const { isLoggedIn, dispatch, setLoading, loading } = useAuthStates();
	const [isFirst, setIsFirst] = useState(true);

	useEffect(() => {
		const isLoggedInState = Boolean(localStorage.getItem("auth"));
		if (isFirst) {
			setTimeout(() => {
				dispatch({ type: isLoggedInState ? "login" : "logout" });
				if (!isLoggedInState && !urlsIgnore.includes(pathname)) {
					replace("/login");
				} else if (isLoggedInState && urlsIgnore.includes(pathname)) {
					replace("/");
				} else {
					setLoading(false);
				}
			}, 500);
			setIsFirst(false);
		}
	}, []);

	useEffect(() => {
		const handleRouteChange = (_, { shallow }) => {
			if (!shallow) {
				NProgress.start();
			}
		};

		events.on("routeChangeStart", handleRouteChange);
		events.on("routeChangeComplete", () => NProgress.done());
		events.on("routeChangeError", () => NProgress.done());

		return () => {
			events.off("routeChangeStart", handleRouteChange);
			events.off("routeChangeComplete", () => {
				setLoading(false);
				NProgress.done();
			});
			events.off("routeChangeError", () => NProgress.done());
		};
	}, []);

	return {
		loading,
		isLoggedIn,
		setLoading,
	};
};

export default useAuthValidation;
