import React from 'react'
import { connect } from 'react-redux';

import Loader from '../Loader';
import NewTodoForm from './NewTodoForm';
import Navigation from './Navigation';
import { handleAddTodo, toggleButton, setFilter } from '../../store/actions';

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

const mapDispatchToProps = dispatch => ( {
	handleAddTodo: task => dispatch( handleAddTodo( task ) ),
	setFilter: value => dispatch( setFilter( value ) ),
	toggleButton: () => dispatch( toggleButton() ),
} );

const mapStateToProps = state => ( {
	formShow: state.formShow,
	loading: state.loading,
} );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( Navbar );
