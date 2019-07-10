import React, { Component } from 'react';
import uuid from 'uuid/v4';

import Navigation from '../Navigation';
import Todo from '../Todo';

import { Todos, Wraper } from './styles';

const initTodos = [
	{
		id: 0,
		task: 'Buy running shoes',
		completed: false,
	},
	{
		id: 1,
		task: 'Run two miles with Lisa',
		completed: true,
	},
];

class TodoList extends Component {
	state = {
		todos: initTodos,
		todoToShow: 'all',
	};

	add = newTodos => {
		this.setState( {
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					task: newTodos,
					completed: false,
				},
			],
		} )
	}

	remove = id => {
		this.setState( {
			todos: this.state.todos.filter( todo =>
				todo.id !== id
			),
		} )
	}

	updateTodoToShow = filter => {
		this.setState( {
			todoToShow: filter,
		} )
	}

	render() {
		const { add, updateTodoToShow, remove } = this;
		const { todoToShow } = this.state;

		let todos = [];
		if ( todoToShow === 'all' ) {
			todos = this.state.todos;
		} else if ( todoToShow === 'active' ) {
			todos = this.state.todos.filter( todo => ! todo.completed );
		} else if ( todoToShow === 'complete' ) {
			todos = this.state.todos.filter( todo => todo.completed );
		}

		return (
			<Wraper>
				<Navigation
					addTodo={ add }
					filterTodo={ updateTodoToShow }
				/>
				<Todos>
					{ todos.map( todo => (
						<Todo
							key={ todo.id }
							id={ todo.id }
							task={ todo.task }
							completed={ todo.completed }
							handleRemove={ remove }
						/>
					) ) }
				</Todos>
			</Wraper>
		);
	}
}

export default TodoList;
