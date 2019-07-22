import React, { useState, useRef } from 'react';
import {
	FiCheckSquare,
	FiMoreVertical,
	FiSquare,
	FiX,
} from 'react-icons/fi';

import useOutsideClick from '../../utilities/useOutsideClick'

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
	const toggleWrapRef = useRef();
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

	useOutsideClick( toggleWrapRef, () => {
		if ( visible ) {
			setVisible( false )
		}
	} )

	return (
		<List initialPose="exit" pose="enter">
			<TaskWrap pose={ visible ? 'open' : 'closed' }>
				{ editing
					? (
						<Form onSubmit={ handleUpdate }>
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
			<ToggleWrap ref={ toggleWrapRef }>
				<Check
					completed={ completed }
					isVisible={ completed }
					onClick={ handleCompletion }
				>
					<FiCheckSquare />
					<FiSquare />
				</Check>
				<Remove onClick={ () => handleRemove( id ) }>
					<FiX />
				</Remove>
			</ToggleWrap>
		</List>
	)
}

export default Todo;
