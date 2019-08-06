import {
	TOGGLE_BUTTON,
	SET_FILTER,
} from '../reducers/ui';

export const toggleButton = () => ( {
	type: TOGGLE_BUTTON,
} )

export const setFilter = filter => ( {
	type: SET_FILTER,
	payload: { filter },
} )
