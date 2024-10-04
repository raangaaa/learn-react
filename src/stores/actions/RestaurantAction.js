export const ADD_RESTO = "ADD_RESTO";
export const DELETE_RESTO = "DELETE_RESTO";

export const addResto = (resto) => ({
	type: ADD_RESTO,
	payload: {
		resto,
	},
});

export const deleteResto = (id) => ({
	type: DELETE_RESTO,
	payload: {
		id,
	},
});
