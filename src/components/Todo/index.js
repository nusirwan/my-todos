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
	TaskWrap,
	ToggleWrap,
} from './styles';

const Todo = props => {
	const [ task, setTask ] = useState( props.task );
	const [ completed, setCompleted ] = useState( props.completed );
	const [ editing, setEditing ] = useState( false );
	const [ visible, setVisible ] = useState( false );
	const {
		toggleCompletion,
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

	const handleCompletion = () => {
		toggleCompletion(
			id,
			completed,
		)
		setCompleted( ! completed );
	};

	const handleMoreNav = () => {
		setVisible( ! visible )
	}

	return (
		<List initialPose="exit" pose="enter">
			<TaskWrap isVisible={ visible }>
				{ editing
					? (
						<Form onSubmit={ handleUpdate } initialPose="exit" pose="enter">
							<Input
								autoComplete="off"
								autoFocus={ true }
								name='task'
								onChange={ event => setTask( event.target.value ) }
								onBlur={ handleUpdate }
								onTouchEnd={ handleUpdate }
								type="text"
								value={ task }
							/>
						</Form>
					)
					: (
						<Task
							completed={ completed }
							onDoubleClick={ handleEdit }
							onTouchStart={ handleEdit }
						>
							{ task }
						</Task>
					)
				}
				<More onClick={ handleMoreNav }>
					<FiMoreVertical />
				</More>
			</TaskWrap>
			<ToggleWrap>
				<Check completed={ completed } onClick={ handleCompletion }>
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
