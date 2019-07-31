import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchTodos,
	editCompletion,
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

	remove = id => {
		this.props.dispatch(
			handleRemove( id )
		);
	}

	toggleCompletion = ( id, completed ) => {
		this.props.dispatch(
			editCompletion( id, completed )
		);
	}

	render() {
		const { todos } = this.props;
		const { remove, toggleCompletion, update } = this;

		return (
			<Wraper>
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
			</Wraper>
		);
	}
}

const mapStateToProps = state => ( {
	todos: state.todos,
} );

export default connect( mapStateToProps )( TodoList );
