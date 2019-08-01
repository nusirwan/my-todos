import axios from '../../axios'

import {
	INITIAL_DATA_STARTED,
	INITIAL_DATA_REQUEST,
	INITIAL_DATA_FAILED,
	TOGGLE_BUTTON,
	EDIT_COMPLETION_TODO,
	REMOVE_TODO,
	EDIT_TASK_TODO,
} from '../reducers/todos';

export const fetchTodos = () => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )

		await axios
			.get( '/mytodos' )
			.then( response => {
				dispatch( initDataRequest( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const initDataStarted = () => ( {
	type: INITIAL_DATA_STARTED,
} )

const initDataRequest = todos => ( {
	type: INITIAL_DATA_REQUEST,
	payload: { todos },
} )

const initDataFailed = () => ( {
	type: INITIAL_DATA_FAILED,
} )

export const handleEditCompletionTodo = ( id, completed ) => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )

		await axios
			.put( `/mytodos/${ id }`, {
				completed: ! completed,
			} )
			.then( response => {
				dispatch( editCompletionTodo( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const editCompletionTodo = result => ( {
	type: EDIT_COMPLETION_TODO,
	payload: {
		id: result.id,
		completed: result.completed,
	},
} )

export const handleRemoveTodo = id => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )

		await axios
			.delete( `/mytodos/${ id }` )
			.then( response => {
				dispatch( removeTodo( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const removeTodo = result => ( {
	type: REMOVE_TODO,
	payload: { id: result.id },
} )

export const handleEditTaskTodo = ( id, updatedTask ) => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )

		await axios
			.put( `/mytodos/${ id }`, {
				task: updatedTask,
			} )
			.then( response => {
				dispatch( editTaskTodo( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const editTaskTodo = result => ( {
	type: EDIT_TASK_TODO,
	payload: {
		id: result.id,
		task: result.task,
	},
} )

// TODO: split into ui action
export const toggleButton = () => ( {
	type: TOGGLE_BUTTON,
} )
