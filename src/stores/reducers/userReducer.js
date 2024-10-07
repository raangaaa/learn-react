import { CHANGE_ROLE } from "../actions/userAction"

const initialState = {
    user: {
        role: "superAdmin"
    }
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ROLE:
			return {
                ...state,
				user: {
                    ...state.user,
                    role: action.payload
                }
			};
		default:
			return state;
	}
};

export default userReducer;