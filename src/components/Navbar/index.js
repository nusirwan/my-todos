import React from 'react'
import PropTypes from 'prop-types';

import Loader from '../Loader';
import NewTodoForm from './NewTodoForm';
import Navigation from './Navigation';

import {
	Header,
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
		loaderText,
		loaderType,
		toggleFormShow,
	} = props;

	return (
		<Header pose={ formShow ? 'open' : 'closed' }>
			<Wrapper>
				<Title initialPose="exit" pose="enter">{ headerTitle }</Title>
				<Loader
					isVisible={ loading }
					title={ loaderText }
					type={ loaderType }
				/>
				<Navigation
					isVisible={ ! loading }
					filterTodo={ filterTodo }
					onClick={ toggleFormShow }
				/>
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
	loaderText: PropTypes.string,
	loaderType: PropTypes.string,
	toggleFormShow: PropTypes.func.isRequired,
}

export default Navbar;
