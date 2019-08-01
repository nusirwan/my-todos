import axios from '../../axios'

import {
	INITIAL_DATA_STARTED,
	INITIAL_DATA_REQUEST,
	INITIAL_DATA_FAILED,
	TOGGLE_BUTTON,
	TOGGLE_COMPLETION,
	TOGGLE_REMOVE,
	UPDATE_TASK,
} from '../reducers/todos';

export const fetchTodos = () => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )

		await axios
			.get( '/mytodos' )
			.then( response => {
				dispatch( initData( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const initDataStarted = () => ( {
	type: INITIAL_DATA_STARTED,
} )

const initData = todos => ( {
	type: INITIAL_DATA_REQUEST,
	payload: { todos },
} )

const initDataFailed = () => ( {
	type: INITIAL_DATA_FAILED,
} )

export const editCompletion = ( id, completed ) => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )

		await axios
			.put( `/mytodos/${ id }`, {
				completed: ! completed,
			} )
			.then( response => {
				dispatch( toggleCompletion( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const toggleCompletion = result => ( {
	type: TOGGLE_COMPLETION,
	payload: {
		id: result.id,
		completed: result.completed,
	},
} )

export const handleRemove = id => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )

		await axios
			.delete( `/mytodos/${ id }` )
			.then( response => {
				dispatch( toggleRemove( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const toggleRemove = result => ( {
	type: TOGGLE_REMOVE,
	payload: { id: result.id },
} )

export const handleEdit = ( id, updatedTask ) => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )

		await axios
			.put( `/mytodos/${ id }`, {
				task: updatedTask,
			} )
			.then( response => {
				dispatch( updateTask( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const updateTask = result => ( {
	type: UPDATE_TASK,
	payload: {
		id: result.id,
		task: result.task,
	},
} )

// TODO: split into ui action
export const toggleButton = () => ( {
	type: TOGGLE_BUTTON,
} )
