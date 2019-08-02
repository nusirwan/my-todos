import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	fetchTodos,
	handleEditCompletionTodo,
	handleRemoveTodo,
	handleEditTaskTodo,
} from '../../store/actions';

import Todo from '../Todo';

import { ErrorText, Todos } from './styles';

class TodoList extends Component {
	componentDidMount() {
		this.props.fetchTodos();
	}

	update = ( id, updateTask ) => {
		this.props.handleEditTaskTodo( id, updateTask );
	}

	remove = id => {
		this.props.handleRemoveTodo( id );
	}

	toggleCompletion = ( id, completed ) => {
		this.props.handleEditCompletionTodo( id, completed )
	}

	render() {
		const { error, todos } = this.props;
		const { remove, toggleCompletion, update } = this;

		return (
			<Fragment>
				{ error
					? <ErrorText>Ops... Internal Server Error!</ErrorText>
					: (
						<Todos>
							{ todos.map( todo => (
								<Todo
									key={ todo.id }
									id={ todo.id }
									completed={ todo.completed }
									task={ todo.task }
									toggleCompletion={ toggleCompletion }
									toggleRemove={ remove }
									updateTodo={ update }
								/>
							) ) }
						</Todos>
					)
				}
			</Fragment>
		);
	}
}

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
	error: state.error,
	todos: getTodos( state.todos, state.filterTodos ),
} );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( TodoList );
