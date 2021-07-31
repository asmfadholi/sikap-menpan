const reducer = (_, action: { type: string }) => {
	switch (action.type) {
		case "login":
			return { isLoggedIn: true };
		case "logout":
			return { isLoggedIn: false };
		default:
			throw new Error();
	}
};

export default reducer;
