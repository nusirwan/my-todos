import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import uuid from 'uuid/v4';

import axios from '../../axios'
import Navigation from '../Navigation';
import Todo from '../Todo';

import {
	ErrorTitle,
	LoaderWrap,
	Todos,
	Wraper,
} from './styles';

class TodoList extends Component {
	state = {
		error: false,
		loading: true,
		todos: [],
		todoToShow: 'all',
	};

	async componentDidMount() {
		await axios.get( '/mytodos' )
			.then( respone => {
				setTimeout( () => {
					this.setState( {
						todos: respone.data,
						loading: false,
					} )
				}, 1000 );
			} )
			.catch( () => {
				setTimeout( () => {
					this.setState( {
						loading: false,
						error: true,
					} )
				}, 1000 );
			} );
	}

	add = newTodos => {
		this.setState( {
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					task: newTodos,
					completed: false,
				},
			],
		} )
	}

	remove = id => {
		this.setState( {
			todos: this.state.todos.filter( todo =>
				todo.id !== id
			),
		} )
	}

	update = ( id, updatedTask ) => {
		const updatedTodos = this.state.todos.map( todo => {
			if ( todo.id === id ) {
				return {
					...todo,
					task: updatedTask,
				}
			}
			return todo;
		} );
		this.setState( { todos: updatedTodos } );
	}

	toggleCompletion = id => {
		const updatedTodos = this.state.todos.map( todo => {
			if ( todo.id === id ) {
				return {
					...todo,
					completed: ! todo.completed,
				}
			}
			return todo
		} );
		this.setState( { todos: updatedTodos } );
	}

	updateTodoToShow = filter => {
		this.setState( {
			todoToShow: filter,
		} )
	}

	render() {
		const {
			add,
			remove,
			toggleCompletion,
			updateTodoToShow,
			update,
		} = this;
		const { error, loading, todoToShow  } = this.state;

		let todos = [];
		if ( todoToShow === 'all' ) {
			todos = this.state.todos;
		} else if ( todoToShow === 'active' ) {
			todos = this.state.todos.filter( todo => ! todo.completed );
		} else if ( todoToShow === 'complete' ) {
			todos = this.state.todos.filter( todo => todo.completed );
		}

		return (
			<Wraper>
				<Navigation
					addTodo={ add }
					filterTodo={ updateTodoToShow }
				/>
				{
					loading && (
						<LoaderWrap>
							<Loader
								color="grey"
								height={ 32 }
								type="Oval"
								width={ 32 }
							/>
						</LoaderWrap>
					)
				}
				{
					error
						? (
							<LoaderWrap>
								<ErrorTitle>Ops... File Not Found!</ErrorTitle>
							</LoaderWrap>
						)
						: (
							<Todos>
								{ todos.map( todo => (
									<Todo
										key={ todo.id }
										id={ todo.id }
										completed={ todo.completed }
										handleCompletion={ toggleCompletion }
										handleRemove={ remove }
										task={ todo.task }
										updateTodo={ update }
									/>
								) ) }
							</Todos>
						)
				}
			</Wraper>
		);
	}
}

export default TodoList;
