let initialState = {
	error: false,
	loading: true,
	todos: [],
};

export const INITIAL_DATA_STARTED = 'INITIAL_DATA_STARTED';
export const INITIAL_DATA_REQUEST = 'INITIAL_DATA_REQUEST';
export const INITIAL_DATA_FAILED = 'INITIAL_DATA_FAILED';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_COMPLETION_TODO = 'EDIT_COMPLETION_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TASK_TODO = 'EDIT_TASK_TODO';

const services = ( state = initialState, action ) => {
	switch ( action.type ) {
		case INITIAL_DATA_STARTED :
			return {
				...state,
				loading: true,
			}

		case INITIAL_DATA_REQUEST :
			return {
				...state,
				loading: false,
				todos: [
					...state.todos,
					...action.payload.todos,
				],
			}

		case INITIAL_DATA_FAILED :
			return {
				...state,
				loading: false,
				error: true,
			}

		case ADD_TODO :
			return {
				...state,
				loading: false,
				todos: [
					...state.todos,
					action.payload.todos,
				],
			}

		case EDIT_COMPLETION_TODO : {
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

		case REMOVE_TODO : {
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

		case EDIT_TASK_TODO : {
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

		default:
			return state;
	}
}

export default services;
