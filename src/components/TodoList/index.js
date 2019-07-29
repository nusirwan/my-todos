import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, editTodosCompletion } from '../../store/actions';

import Todo from '../Todo';

import { Todos, Wraper } from './styles';

class TodoList extends Component {
	componentDidMount() {
		this.props.dispatch( fetchTodos() );
	}

	render() {
		const { dispatch } = this.props;

		return (
			<Wraper>
				<Todos>
					{ this.props.todos.map( todo => (
						<Todo
							key={ todo.id }
							id={ todo.id }
							completed={ todo.completed }
							task={ todo.task }
							toggleCompletion={ () => dispatch(
								editTodosCompletion( todo.id, todo.completed )
							) }
							// toggleRemove={ remove }
							// updateTodo={ update }
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
