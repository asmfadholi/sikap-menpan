import React from "react";
import Authorizhed from "./components/Authorized";

// hooks
import useAuthValidation from "hooks/useAuthValidation";

// components
import Loaders from "components/Loaders";

const Layouts = ({ children, auth }) => {
	const authValidation = useAuthValidation();
	const { loading } = authValidation;

	if (loading) {
		return <Loaders />;
	}

	if (!loading && !auth) {
		return children;
	}

	if (!loading && auth) {
		return <Authorizhed>{children}</Authorizhed>;
	}
};

export default Layouts;
