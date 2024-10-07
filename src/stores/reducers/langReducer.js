import { SET_LANG } from "../actions/langAction";

const initialState = {
	lang: "id",
};

const langReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LANG:
			return {
				...state,
				lang: action.payload,
			};
		default:
			return state;
	}
};

export default langReducer;
