import React, { useState } from 'react';
import {
	FiCheckSquare,
	FiSquare,
	FiX,
} from 'react-icons/fi';

import {
	Check,
	Input,
	Form,
	List,
	Remove,
	Task,
} from './styles';

const Todo = props => {
	const [ task ] = useState( props.task );
	const [ editing, setEditing ] = useState( false );
	const { completed, handleRemove, id, handleCompletion } = props;

	const handleEdit = () => {
		setEditing( ! editing );
	};

	return (
		<List>
			{ editing
				? (
					<Form>
						<Input
							autoComplete="off"
							autoFocus={ true }
							name='task'
							type="text"
							value={ task }
						/>
					</Form>
				)
				: (
					<Task completed={ completed } onDoubleClick={ handleEdit }>
						{ task }
					</Task>
				)
			}
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
