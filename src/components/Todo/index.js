import React from 'react';
import {
	FiCheckSquare,
	FiSquare,
	FiX,
} from 'react-icons/fi';

import { List, Task, Remove, Check } from './styles';

const Todo = props => {
	const { completed, task, handleRemove, id } = props;

	return (
		<List>
			<Task completed={ completed }>
				{ task }
			</Task>
			<Check completed={ completed }>
				{ completed ? <FiCheckSquare /> : <FiSquare /> }
			</Check>
			<Remove onClick={ () => handleRemove( id ) }>
				<FiX />
			</Remove>
		</List>
	)
}

export default Todo;
