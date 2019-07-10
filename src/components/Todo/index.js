import React from 'react';

import { List, Task } from './styles';

const Todo = props => {
	const { completed, task } = props;

	return (
		<List>
			<Task completed={ completed }>
				{ task }
			</Task>
		</List>
	)
}

export default Todo;
