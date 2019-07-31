let initialState = {
	error: false,
	formShow: false,
	loading: true,
	todos: [],
};

export const INITIAL_DATA_STARTED = 'INITIAL_DATA_STARTED';
export const INITIAL_DATA_REQUEST = 'INITIAL_DATA_REQUEST';
export const INITIAL_DATA_FAILED = 'INITIAL_DATA_FAILED';
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';
export const TOGGLE_REMOVE = 'TOGGLE_REMOVE';
export const UPDATE_TASK = 'UPDATE_TASK';

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

		case TOGGLE_COMPLETION: {
			const { todos } = state;
			const { id, completed } = action.payload;

			return {
				...state,
				loading: false,
				todos: todos.map(
					todo => ( todo.id === id )
						? {
							...todo,
							completed: completed,
						}
						: todo
				),
			}
		}

		case TOGGLE_REMOVE: {
			const { todos } = state;
			const { id } = action.payload;

			return {
				...state,
				loading: false,
				todos: todos.filter(
					todo => todo.id !== id
				),
			}
		}

		case UPDATE_TASK: {
			const { todos } = state;
			const { id, task } = action.payload;

			return {
				...state,
				loading: false,
				todos: todos.map(
					todo => ( todo.id === id )
						? {
							...todo,
							task: task,
						}
						: todo
				),
			}
		}

		// TODO: split into ui reducer
		case TOGGLE_BUTTON:
			return {
				...state,
				formShow: ! state.formShow,
			}

		default:
			return state;
	}
}

export default items;
