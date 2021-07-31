import { useState, useEffect } from "react";
import { campaignList } from "./__mocks_data__/campaignList";

export const useDummyQuery = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});

	useEffect(() => {
		setTimeout(() => {
			setData(campaignList);
			setLoading(false);
		}, 1500);
	}, []);

	const refetch = (data) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			console.log(data);
		}, 1500);
	};

	return { loading, data, refetch };
};

export default useDummyQuery;

const defaultVariables = {
	shop_criteria_ids: [],
	shop_criteria_name: "",
	page: 1,
	limit: 10,
};

const normalizerRequest = (val) => {
	if (!val) return defaultVariables;
	return val;
};

export const setConfig = ({ accessToken, sonicAccessToken }, req) => {
	const generateRequest = normalizerRequest(req);
	return {
		notifyOnNetworkStatusChange: true,
		fetchPolicy: "network-only",
		context: {
			fetchOptions: {
				referrerPolicy: "no-referrer-when-downgrade",
			},
			headers: {
				"accounts-authorization": `Bearer ${accessToken}`,
			},
		},
		variables: {
			input: {
				intools_element_id: "ACCESS_SHOP_CRITERIA_LIST",
				sonic_access_token: sonicAccessToken,
				...generateRequest,
			},
		},
	};
};

const queryProperty = "GetShopCriteria";
const listProperty = "shop_criteria";
const totalProperty = "total_data";

export const normalizer = (data) => {
	const { [queryProperty]: queryName = {} } = data || {};
	const {
		[listProperty]: list = [],
		response_header = {},
		[totalProperty]: total = 0,
	} = queryName;
	const { success: isSuccess = false } = response_header;
	return { total, list, isSuccess };
};
