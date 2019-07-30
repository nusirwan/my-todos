let initialState = {
	error: false,
	loading: true,
	todos: [],
};

export const INITIAL_DATA_STARTED = 'INITIAL_DATA_STARTED';
export const INITIAL_DATA_REQUEST = 'INITIAL_DATA_REQUEST';
export const INITIAL_DATA_FAILED = 'INITIAL_DATA_FAILED';
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';

const items = ( state = initialState, action ) => {
	switch ( action.type ) {
		case INITIAL_DATA_STARTED:
			return {
				...state,
				loading: true,
			}

		case INITIAL_DATA_REQUEST:
			return {
				...state,
				loading: false,
				todos: [
					...state.todos,
					...action.payload.todos,
				],
			}

		case INITIAL_DATA_FAILED:
			return {
				...state,
				loading: false,
				error: true,
			}

		case TOGGLE_COMPLETION:
			return {
				...state,
				todos: state.todos.map(
					todo => ( todo.id === action.payload.id )
						? {
							...todo,
							completed: action.payload.completed,
						}
						: todo
				),
			}

		default:
			return state;
	}
}

export default items;
