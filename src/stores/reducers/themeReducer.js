import { TOOGLE_THEME } from "../actions/themeAction";

const initialState = {
	theme: "light",
};

const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOOGLE_THEME:
			return {
				...state,
				theme: state.theme === "light" ? "dark" : "light",
			};
		default:
			return state;
	}
};

export default themeReducer;
