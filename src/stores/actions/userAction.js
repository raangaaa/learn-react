export const CHANGE_ROLE = "CHANGE_ROLE";

export const setUserRole = (role) => ({
	type: CHANGE_ROLE,
    payload: role
});
