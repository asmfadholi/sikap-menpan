import { useState } from "react";
import { setConfig, normalizer, useDummyQuery } from "./config";

const useAgendaList = () => {
	const [variables, setVariables] = useState({ page: 1 });
	const { loading, data, refetch } = useDummyQuery();

	const handleFilter = async (req) => {
		const combineReq = { ...variables, ...req };
		setVariables(combineReq);
		const config = setConfig(
			{ accessToken: "", sonicAccessToken: "" },
			combineReq,
		);
		await refetch(config.variables);
	};

	return {
		loading,
		refetch,
		handleFilter,
		...normalizer(data),
		page: variables.page,
	};
};

export default useAgendaList;
