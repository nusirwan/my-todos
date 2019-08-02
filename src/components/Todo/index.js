import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FiMoreVertical } from 'react-icons/fi';

import useOutsideClick from '../../utilities/useOutsideClick'
import Toggles from './Toggles'

import {
	Input,
	Form,
	List,
	More,
	Task,
	TaskWrap,
} from './styles';

const Todo = props => {
	const [ task, setTask ] = useState( props.task );
	const [ completed, setCompleted ] = useState( props.completed );
	const [ editing, setEditing ] = useState( false );
	const [ isTogglesOpen, setTogglesOpen ] = useState( false );
	const toggleWrapRef = useRef();
	const {
		id,
		toggleCompletion,
		toggleRemove,
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
		if ( isTogglesOpen ) {
			setTogglesOpen( false )
		}
	} )

	return (
		<List initialPose="exit" pose="enter">
			<TaskWrap pose={ isTogglesOpen ? 'open' : 'closed' }>
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
				<More onClick={ () => setTogglesOpen( ! isTogglesOpen ) }>
					<FiMoreVertical />
				</More>
			</TaskWrap>
			<Toggles
				toggleWrapRef={ toggleWrapRef }
				isCheked={ completed }
				toggleCompletion={ handleCompletion }
				toggleRemove={ () => toggleRemove( id ) }
			/>
		</List>
	)
}

Todo.propTypes = {
	completed: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired,
	toggleCompletion: PropTypes.func.isRequired,
	toggleRemove: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
}

export default Todo;
