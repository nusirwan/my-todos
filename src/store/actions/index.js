import axios from 'axios';
import { baseUrl } from '../../config/config'

import {
	INITIAL_DATA_STARTED,
	INITIAL_DATA_REQUEST,
	INITIAL_DATA_FAILED,
	ADD_TODO,
	EDIT_COMPLETION_TODO,
	REMOVE_TODO,
	EDIT_TASK_TODO,
} from '../reducers/services';

import {
	TOGGLE_BUTTON,
	SET_FILTER,
} from '../reducers/ui';

export const fetchTodos = () => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )
		let apiEndpoint = baseUrl + '/mytodos';

		await axios
			.get( apiEndpoint )
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

export const handleAddTodo = newTask => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )
		let apiEndpoint = baseUrl + '/mytodos';

		await axios
			.post( apiEndpoint, {
				task: newTask,
				completed: false,
			} )
			.then( response => {
				dispatch( addTodo( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const addTodo = todos => ( {
	type: ADD_TODO,
	payload: { todos },
} )

export const handleEditCompletionTodo = ( id, completed ) => {
	// redux thunk
	return async dispatch => {
		dispatch( initDataStarted() )
		let apiEndpoint = baseUrl + `/mytodos/${ id }`;

		await axios
			.put( apiEndpoint, {
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
		let apiEndpoint = baseUrl + `/mytodos/${ id }`;

		await axios
			.delete( apiEndpoint )
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
		let apiEndpoint = baseUrl + `/mytodos/${ id }`;

		await axios
			.put( apiEndpoint, {
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

export const setFilter = filter => ( {
	type: SET_FILTER,
	payload: { filter },
} )
