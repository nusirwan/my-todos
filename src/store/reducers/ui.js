import { INITIAL_DATA_STARTED } from './services'

let initialState = {
	filterTodos: 'ALL',
	formShow: false,
};

export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';
export const SET_FILTER = 'SET_FILTER';

const ui = ( state = initialState, action ) => {
	switch ( action.type ) {
		case INITIAL_DATA_STARTED:
			return {
				...state,
				formShow: false,
			}

		case TOGGLE_BUTTON:
			return {
				...state,
				formShow: ! state.formShow,
			}

		case SET_FILTER:
			return {
				...state,
				filterTodos: action.payload.filter,
			}

		default:
			return state;
	}
}

export default ui;
