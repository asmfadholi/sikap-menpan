type ParamsRequest = {
	limit: number;
	page: number;
	search: string;
};

type ActivityDihadiriListData = {
	userId: string;
	userName: string;
};

type ListData = {
	activityAction: string;
	activityDateEnd: string;
	activityDateStart: string;
	activityDescription: string;
	activityDetail: string;
	activityId: string;
	activityName: string;
	activityPlace: string;
	activityStatus: string;
	activityDihadiri: Array<ActivityDihadiriListData>;
	activityStatusName: string;
	activityTimeEnd: string;
	activityTimeStart: string;
	createdAt: string;
	createdBy: string;
	updatedAt: string;
	updatedBy: string;
};

type ResponseData = {
	activities: Array<ListData>;
	start: number;
	total: number;
	errors: string[];
};

export interface UseActivityReturn {
	data: ResponseData;
	params: ParamsRequest;
	loading: boolean;
	handleFilter: (arg: ParamsRequest) => Promise<ResponseData>;
}
