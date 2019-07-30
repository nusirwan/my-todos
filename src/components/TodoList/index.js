import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchTodos,
	editTodosCompletion,
	handleRemove,
	handleEdit,
} from '../../store/actions';

import Todo from '../Todo';

import { Todos, Wraper } from './styles';

class TodoList extends Component {
	componentDidMount() {
		this.props.dispatch( fetchTodos() );
	}

	update = ( id, updateTask ) => {
		this.props.dispatch(
			handleEdit( id, updateTask )
		);
	}

	render() {
		const { dispatch, todos } = this.props;
		const { update } = this;

		return (
			<Wraper>
				<Todos>
					{ todos.map( todo => (
						<Todo
							key={ todo.id }
							id={ todo.id }
							completed={ todo.completed }
							task={ todo.task }
							toggleCompletion={ () => dispatch(
								editTodosCompletion( todo.id, todo.completed )
							) }
							toggleRemove={ () => dispatch(
								handleRemove( todo.id )
							) }
							updateTodo={ update }
						/>
					) ) }
				</Todos>
			</Wraper>
		);
	}
}

const mapStateToProps = state => ( {
	todos: state.todos,
} );

export default connect( mapStateToProps )( TodoList );
