import React from 'react'
import { connect } from 'react-redux';

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
		loading,
		toggleFormShow,
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
					filterTodo={ filterTodo }
					onClick={ toggleFormShow }
				/>
			</Wrapper>
			<NewTodoForm addTodo={ addTodo } isVisible={ formShow } />
		</Header>
	)
}

const mapStateToProps = state => ( {
	loading: state.loading,
} );

export default connect( mapStateToProps )( Navbar );
