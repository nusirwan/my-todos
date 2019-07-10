import React, { useState } from 'react';
import {
	FiCheckSquare,
	FiSquare,
	FiX,
} from 'react-icons/fi';

import { List, Task, Remove, Check } from './styles';

const Todo = props => {
	const [ task ] = useState( props.task );
	const { completed, handleRemove, id, handleCompletion } = props;

	return (
		<List>
			<Task completed={ completed }>
				{ task }
			</Task>
			<Check completed={ completed } onClick={ () => handleCompletion( id ) }>
				{ completed ? <FiCheckSquare /> : <FiSquare /> }
			</Check>
			<Remove onClick={ () => handleRemove( id ) }>
				<FiX />
			</Remove>
		</List>
	)
}

export default Todo;
