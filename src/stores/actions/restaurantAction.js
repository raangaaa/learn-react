export const ADD_RESTO = "ADD_RESTO";
export const DETAIL_RESTO = "DETAIL_RESTO";

export const addResto = (resto) => ({
	type: ADD_RESTO,
	payload: resto,
});

export const detailResto = (detailResto) => ({
	type: DETAIL_RESTO,
	payload: detailResto
});

