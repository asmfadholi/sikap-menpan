// An interface for our actions
interface Action {
	type: string;
}

// An interface for our state
interface State {
	isLoggedIn: boolean;
}

const reducer = (_: State, action: Action) => {
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
