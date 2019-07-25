import React from 'react'
import PropTypes from 'prop-types';
import { FiPlusSquare } from 'react-icons/fi';

import Loader from '../Loader';
import NewTodoForm from '../NewTodoForm';

import {
	Add,
	Divider,
	Header,
	Nav,
	Select,
	Title,
	Wrapper,
} from './styles';

const Navbar = props => {
	const {
		addTodo,
		filterTodo,
		formShow,
		headerTitle,
		loading,
		loaderTitle,
		loaderType,
		toggleFormShow,
	} = props;

	const handleChange = event => {
		event.preventDefault();
		filterTodo( event.target.value )
	}

	return (
		<Header pose={ formShow ? 'open' : 'closed' }>
			<Wrapper>
				<Title initialPose="exit" pose="enter">{ headerTitle }</Title>
				<Loader
					isVisible={ loading }
					title={ loaderTitle }
					type={ loaderType }
				/>
				<Nav isVisible={ ! loading }>
					<Select name="todos" onChange={ handleChange }>
						<option value="all" defaultValue>All</option>
						<option value="active">Active</option>
						<option value="complete">Complete</option>
					</Select>
					<Divider />
					<Add onClick={ toggleFormShow }><FiPlusSquare /></Add>
				</Nav>
			</Wrapper>
			<NewTodoForm addTodo={ addTodo } isVisible={ formShow } />
		</Header>
	)
}

Navbar.propTypes = {
	addTodo: PropTypes.func.isRequired,
	filterTodo: PropTypes.func.isRequired,
	formShow: PropTypes.bool.isRequired,
	headerTitle: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
	loaderTitle: PropTypes.string,
	loaderType: PropTypes.string,
	toggleFormShow: PropTypes.func.isRequired,
}

export default Navbar;
