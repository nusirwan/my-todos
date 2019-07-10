import React, { Component } from 'react';

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

	render() {
		const { todos } = this.state;

		return (
			<Wraper>
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
