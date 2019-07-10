import React, { Component } from 'react';

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
						<li
							key={ todo.id }
							id={ todo.id }
							task={ todo.task }
						>
							{ todo.task }
						</li>
					) ) }
				</Todos>
			</Wraper>
		);
	}
}

export default TodoList;
