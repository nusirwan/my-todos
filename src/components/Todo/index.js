import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
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
		handleRemove,
		id,
		toggleCompletion,
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
				<More onClick={ () => setVisible( ! visible ) }>
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

Todo.propTypes = {
	completed: PropTypes.bool.isRequired,
	handleRemove: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
	toggleCompletion: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
}

export default Todo;
