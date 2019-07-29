import axios from '../../axios'

export const fetchTodos = () => {
	// redux thunk
	return dispatch => {
		dispatch( initDataStarted() )

		axios.get( '/mytodos' )
			.then( response => {
				dispatch( initData( response.data ) )
			} )
			.catch( error => {
				dispatch( initDataFailed( error ) )
			} )
	}
}

const initDataStarted = () => ( {
	type: 'INITIAL_DATA_STARTED',
} )

const initData = todos => ( {
	type: 'INITIAL_DATA',
	payload: { todos },
} )

const initDataFailed = () => ( {
	type: 'INITIAL_DATA_FAILED',
} )

export const editTodosCompletion = ( id, completed ) => {
	// redux thunk
	return dispatch => {
		axios.put( `/mytodos/${ id }`, { completed: ! completed } )
			.then( response => {
				dispatch( toggleCompletion( response.data ) )
			} )
			.catch( error => {
				// eslint-disable-next-line no-console
				console.log( error );
			} )
	}
}

export const toggleCompletion = id => ( {
	type: 'TOGGLE_COMPLETION',
	payload: { id },
} )
