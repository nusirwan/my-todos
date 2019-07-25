import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiCornerRightDown } from 'react-icons/fi';

import { Form, Input, Submit } from './styles';

const NewTodoForm = props => {
	const [ task, setTask ] = useState( '' );
	const { addTodo, isVisible } = props;

	const handleChange = event => {
		setTask( event.target.value )
	}

	const handleSubmit = event => {
		event.preventDefault();
		addTodo( {
			task: task,
			completed: false,
		} );
		setTask( '' );
	}

	return (
		<Form onSubmit={ handleSubmit } isVisible={ isVisible }>
			<Input
				autoComplete="off"
				autoFocus={ true }
				id='task'
				name='task'
				onChange={ handleChange }
				placeholder='New Todo'
				type="text"
				value={ task }
			/>
			<Submit disabled={ ! task }><FiCornerRightDown /></Submit>
		</Form>
	)
}

NewTodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
	isVisible: PropTypes.bool.isRequired,
};

export default NewTodoForm;
