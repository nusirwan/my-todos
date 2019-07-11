import React, { useState } from 'react';
import {
	FiCheckSquare,
	FiMoreVertical,
	FiSquare,
	FiX,
} from 'react-icons/fi';

import {
	Check,
	Input,
	Form,
	List,
	More,
	Remove,
	Task,
	ToggleWrap,
} from './styles';

const Todo = props => {
	const [ task, setTask ] = useState( props.task );
	const [ editing, setEditing ] = useState( false );
	const [ visible, setVisible ] = useState( false );
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

	const handleMoreNav = () => {
		setVisible( ! visible )
	}

	return (
		<List initialPose="exit" pose="enter">
			{ editing
				? (
					<Form onSubmit={ handleUpdate } initialPose="exit" pose="enter">
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
			<More isVisible={ visible } onClick={ handleMoreNav }>
				<FiMoreVertical />
			</More>
			<ToggleWrap onMouseLeave={ handleMoreNav } isVisible={ visible }>
				<Check completed={ completed } onClick={ () => handleCompletion( id ) }>
					{ completed ? <FiCheckSquare /> : <FiSquare /> }
				</Check>
				<Remove onClick={ () => handleRemove( id ) }>
					<FiX />
				</Remove>
			</ToggleWrap>
		</List>
	)
}

export default Todo;
