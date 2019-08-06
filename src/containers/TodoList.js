import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import {
	fetchTodos,
	handleEditCompletionTodo,
	handleRemoveTodo,
	handleEditTaskTodo,
} from '../store/actions';

const getTodos = ( todos, filter ) => {
	switch ( filter ) {
		case 'ALL':
			return todos;
		case 'ACTIVE':
			return todos.filter( todo => ! todo.completed );
		case 'COMPLETED':
			return todos.filter( todo => todo.completed );
		default:
			return todos;
	}
}

const mapDispatchToProps = dispatch => ( {
	fetchTodos: () => dispatch( fetchTodos() ),
	handleEditCompletionTodo: ( id, completed ) => dispatch(
		handleEditCompletionTodo( id, completed )
	),
	handleRemoveTodo: id => dispatch( handleRemoveTodo( id ) ),
	handleEditTaskTodo: ( id, updateTask ) => dispatch(
		handleEditTaskTodo( id, updateTask )
	),
} );

const mapStateToProps = state => ( {
	error: state.services.error,
	todos: getTodos(
		state.services.todos,
		state.ui.filterTodos,
	),
} );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( TodoList );
