import React, { Component, Fragment } from 'react';

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
export default TodoList;
