type HandleMutateArg = {
	body: {
		activityName: string;
		activityDateStart: string;
		activityDateEnd: string;
		activityTimeStart: string;
		activityTimeEnd: string;
		activityPlace: string;
		activityDetail: string;
		activityAction: string;
		activityDescription: string;
	};
};

export type HandleMutateFunc = ({ body }: HandleMutateArg) => Promise<{
	success: boolean;
	message: string;
}>;
