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
		this.props.dispatch( fetchTodos() );
	}

	update = ( id, updateTask ) => {
		this.props.dispatch(
			handleEditTaskTodo( id, updateTask )
		);
	}

	remove = id => {
		this.props.dispatch(
			handleRemoveTodo( id )
		);
	}

	toggleCompletion = ( id, completed ) => {
		this.props.dispatch(
			handleEditCompletionTodo( id, completed )
		);
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

const mapStateToProps = state => ( {
	error: state.error,
	todos: state.todos,
} );

export default connect( mapStateToProps )( TodoList );
