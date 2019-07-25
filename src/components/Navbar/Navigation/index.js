import React from 'react'
import PropTypes from 'prop-types';
import { FiPlusSquare } from 'react-icons/fi';

import {
	Add,
	Divider,
	Nav,
	Select,
} from './styles';

const Navigation = props => {
	const { filterTodo, isVisible, onClick } = props;

	const handleChange = event => {
		event.preventDefault();
		filterTodo( event.target.value )
	}

	return (
		<Nav isVisible={ isVisible }>
			<Select name="todos" onChange={ handleChange }>
				<option value="all" defaultValue>All</option>
				<option value="active">Active</option>
				<option value="complete">Complete</option>
			</Select>
			<Divider />
			<Add onClick={ onClick }><FiPlusSquare /></Add>
		</Nav>
	)
}

Navigation.propTypes = {
	filterTodo: PropTypes.func.isRequired,
	isVisible: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Navigation;
