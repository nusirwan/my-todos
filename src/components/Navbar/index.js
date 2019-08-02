import React from 'react'

import Loader from '../Loader';
import NewTodoForm from './NewTodoForm';
import Navigation from './Navigation';

import { Header, Title, Wrapper } from './styles';

const Navbar = props => {
	const {
		formShow,
		handleAddTodo,
		loading,
		setFilter,
		toggleButton,
	} = props;

	return (
		<Header pose={ formShow ? 'open' : 'closed' }>
			<Wrapper>
				<Title initialPose="exit" pose="enter">my_Todos</Title>
				<Loader
					isVisible={ loading }
					title="Loading..."
					type="Ball-Triangle"
				/>
				<Navigation
					isVisible={ ! loading }
					filterTodo={ setFilter }
					onClick={ toggleButton }
				/>
			</Wrapper>
			<NewTodoForm addTodo={ handleAddTodo } isVisible={ formShow } />
		</Header>
	)
}

export default Navbar;
