import React, { useState } from 'react'
import { FiPlusSquare } from 'react-icons/fi';

import NewTodoForm from '../NewTodoForm';

import {
	Add,
	Divider,
	Header,
	Select,
	Title,
	Wrapper,
} from './styles';

const Navigation = props => {
	const [ visible, setVisible ] = useState( false );

	const handleChange = event => {
		event.preventDefault();
		props.filterTodo( event.target.value )
	}

	return (
		<Header isVisible={ visible }>
			<Wrapper>
				<Title>my Todos</Title>
				<Select name="todos" onChange={ handleChange }>
					<option value="all" defaultValue>All</option>
					<option value="active">Active</option>
					<option value="complete">Complete</option>
				</Select>
				<Divider />
				<Add
					isVisible={ visible }
					onClick={ () => setVisible( ! visible ) }
				>
					<FiPlusSquare />
				</Add>
			</Wrapper>
			<NewTodoForm addTodo={ props.addTodo } isVisible={ visible } />
		</Header>
	)
}

export default Navigation
