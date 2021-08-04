import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const urlsIgnore = ["/login"];

const useAuthValidation = () => {
	const { replace, events, pathname } = useRouter();
	const [loading, setLoading] = useState(true);
	const [isFirst, setIsFirst] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const isLoggedInState = Boolean(localStorage.getItem("auth"));
		if (isFirst) {
			setTimeout(() => {
				if (!isLoggedInState && !urlsIgnore.includes(pathname)) {
					replace("/login");
				} else if (isLoggedInState) {
					if (urlsIgnore.includes(pathname)) {
						replace("/");
					} else {
						setLoading(false);
					}
					setIsLoggedIn(true);
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
		events.on("routeChangeComplete", () => {
			NProgress.done();
			setLoading(false);
		});
		events.on("routeChangeError", () => NProgress.done());

		return () => {
			events.off("routeChangeStart", handleRouteChange);
			events.off("routeChangeComplete", () => NProgress.done());
			events.off("routeChangeError", () => NProgress.done());
		};
	}, []);

	return { loading, setLoading, isLoggedIn };
};

export default useAuthValidation;
