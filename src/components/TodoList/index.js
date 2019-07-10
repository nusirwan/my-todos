import React, { Component } from 'react';

import { Todos, Wraper } from './styles';

class TodoList extends Component {
	render() {
		return (
			<Wraper>
				<Todos>
					Todo List
				</Todos>
			</Wraper>
		);
	}
}

export default TodoList;
