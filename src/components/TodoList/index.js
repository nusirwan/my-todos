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

	render() {
		const { add } = this;
		const { todos } = this.state;

		return (
			<Wraper>
				<Navigation addTodo={ add } />
				<Todos>
					{ todos.map( todo => (
						<Todo
							key={ todo.id }
							id={ todo.id }
							task={ todo.task }
							completed={ todo.completed }
						/>
					) ) }
				</Todos>
			</Wraper>
		);
	}
}

export default TodoList;
