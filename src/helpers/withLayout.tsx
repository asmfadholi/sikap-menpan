import React from "react";
import Layouts from "components/Layouts";

export default (comp, auth) => {
	comp.getLayout = (page) => {
		return <Layouts auth={auth}>{page}</Layouts>;
	};
	return comp;
};
