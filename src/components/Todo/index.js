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
	const [ task, setTask ] = useState( props.task );
	const [ editing, setEditing ] = useState( false );
	const {
		completed,
		handleCompletion,
		handleRemove,
		id,
		updateTodo,
	} = props;

	const handleEdit = () => {
		setEditing( ! editing );
	};

	const handleUpdate = event => {
		event.preventDefault();
		updateTodo(
			id,
			task,
		)
		setEditing( false );
	};

	return (
		<List>
			{ editing
				? (
					<Form onSubmit={ handleUpdate }>
						<Input
							autoComplete="off"
							autoFocus={ true }
							name='task'
							onChange={ event => setTask( event.target.value ) }
							onBlur={ handleUpdate }
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
