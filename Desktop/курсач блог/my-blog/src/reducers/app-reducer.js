import { ACTION_TYPE } from "../actions";

const initualAppState = {
	wasLogout: false,
};

export const appReducer = (state = initualAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		default:
			return state;
	}
};
