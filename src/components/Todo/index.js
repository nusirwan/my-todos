import React from 'react';
import { FiX } from 'react-icons/fi';

import { List, Task, Remove } from './styles';

const Todo = props => {
	const { completed, task } = props;

	return (
		<List>
			<Task completed={ completed }>
				{ task }
			</Task>
			<Remove>
				<FiX />
			</Remove>
		</List>
	)
}

export default Todo;
