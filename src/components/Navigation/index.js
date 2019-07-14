import React, { Fragment, useState } from 'react'
import { FiPlusSquare } from 'react-icons/fi';

import Loader from '../Loader';
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
	const [ formShow, setFormShow ] = useState( false );
	const { loading } = props;

	const handleChange = event => {
		event.preventDefault();
		props.filterTodo( event.target.value )
	}

	return (
		<Header formShow={ formShow }>
			<Wrapper>
				<Title>my Todos</Title>
				{
					loading
						? <Loader isVisible={ loading }/>
						: (
							<Fragment>
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
							</Fragment>
						)
				}
			</Wrapper>
			<NewTodoForm addTodo={ props.addTodo } isVisible={ formShow } />
		</Header>
	)
}

export default Navigation
