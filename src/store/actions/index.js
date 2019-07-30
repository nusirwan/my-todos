import axios from '../../axios'

import {
	INITIAL_DATA_STARTED,
	INITIAL_DATA_REQUEST,
	INITIAL_DATA_FAILED,
	TOGGLE_COMPLETION,
	TOGGLE_REMOVE,
} from '../reducers/todos';

export const fetchTodos = () => {
	// redux thunk
	return dispatch => {
		dispatch( initDataStarted() )

		axios
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

export const editTodosCompletion = ( id, completed ) => {
	// redux thunk
	return dispatch => {
		dispatch( initDataStarted() )

		axios
			.put( `/mytodos/${ id }`, { completed: ! completed } )
			.then( response => {
				const { id, completed } = response.data;
				dispatch( toggleCompletion( id, completed ) )
			} )
			.catch( error => {
				// eslint-disable-next-line no-console
				console.log( error );
			} )
	}
}

export const toggleCompletion = ( id, completed ) => ( {
	type: TOGGLE_COMPLETION,
	payload: {
		id,
		completed,
	},
} )

export const handleRemove = id => {
	// redux thunk
	return dispatch => {
		dispatch( initDataStarted() )

		axios
			.delete( `/mytodos/${ id }` )
			.then( response => {
				const { id } = response.data;
				dispatch( toggleRemove( id ) )
			} )
			.catch( error => {
				// eslint-disable-next-line no-console
				console.log( error );
			} )
	}
}

export const toggleRemove = id => ( {
	type: TOGGLE_REMOVE,
	payload: { id },
} )
