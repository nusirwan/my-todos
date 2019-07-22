import React, { useState } from 'react'
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

const Navigation = props => {
	const [ formShow, setFormShow ] = useState( false );
	const { loading } = props;

	const handleChange = event => {
		event.preventDefault();
		props.filterTodo( event.target.value )
	}

	return (
		<Header pose={ formShow ? 'open' : 'closed' }>
			<Wrapper>
				<Title initialPose="exit" pose="enter">my Todos</Title>
				<Loader isVisible={ loading }/>
				<Nav isVisible={ ! loading }>
					<Select name="todos" onChange={ handleChange }>
						<option value="all" defaultValue>All</option>
						<option value="active">Active</option>
						<option value="complete">Complete</option>
					</Select>
					<Divider />
					<Add
						formShow={ formShow }
						onClick={ () => setFormShow( ! formShow ) }
					>
						<FiPlusSquare />
					</Add>
				</Nav>
			</Wrapper>
			<NewTodoForm addTodo={ props.addTodo } isVisible={ formShow } />
		</Header>
	)
}

export default Navigation
