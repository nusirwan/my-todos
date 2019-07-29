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
