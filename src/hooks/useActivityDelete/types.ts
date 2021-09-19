type HandleMutateArg = {
	body: {
		activityId: Number;
	};
};

export type HandleMutateFunc = ({ body }: HandleMutateArg) => Promise<{
	success: boolean;
	message: string;
}>;

export type UseActivityDeleteHooks = [HandleMutateFunc, { data: any; loading: boolean; error: any; }]
