type HandleLoginArg = {
	body: {
		email: string;
		password: string;
	};
};

export type HandleLoginFunc = ({ body }: HandleLoginArg) => Promise<{
	success: boolean;
	message: string;
	token: string;
}>;
