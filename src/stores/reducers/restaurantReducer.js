import { ADD_RESTO, DETAIL_RESTO } from "../actions/restaurantAction";

const initialState = {
	resto: [],
	detailResto: {},
};

const restoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_RESTO:
			return {
				...state,
				resto: action.payload,
			};
		case DETAIL_RESTO:
			return {
				...state,
				detailResto: action.payload,
			};
		default:
			return state;
	}
};

export default restoReducer;
