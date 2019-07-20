import React, { Component } from 'react';

import axios from '../../axios'
import Navigation from '../Navigation';
import Todo from '../Todo';

import {
	ErrorTitle,
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
			.then( response => {
				setTimeout( () => {
					this.setState( {
						todos: response.data,
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
			} )
	}

	add = async newTodos => {
		this.setState( { loading: true } )
		await axios.post( '/mytodos', newTodos )
			.then( response => {
				this.setState( {
					todos: [
						...this.state.todos,
						response.data,
					],
					loading: false,
				} )
			} )
			.catch( () => {
				this.setState( {
					error: true,
					loading: false,
				} )
			} )
	}

	remove = async id => {
		this.setState( { loading: true } )
		await axios.delete( `/mytodos/${ id }` )
			.then( () => {
				const todos = this.state.todos;
				const updatedTodos = todos.filter( todo => todo.id !== id );
				this.setState( {
					todos: updatedTodos,
					loading: false,
				} )
			} )
			.catch( () => {
				this.setState( {
					error: true,
					loading: false,
				} )
			} )
	}

	update = async ( id, updatedTask ) => {
		this.setState( { loading: true } )
		await axios.put( `/mytodos/${ id }`, { task: updatedTask } )
			.then( response => {
				const updatedTodos = this.state.todos.map( todo => {
					if ( todo.id === id ) {
						return {
							...todo,
							task: response.data.task,
						}
					}
					return todo;
				} );
				this.setState( {
					todos: updatedTodos,
					loading: false,
				} );
			} )
			.catch( () => {
				this.setState( {
					error: true,
					loading: false,
				} )
			} )
	}

	toggleCompletion = async ( id, completed ) => {
		this.setState( { loading: true } )
		await axios.put( `/mytodos/${ id }`, { completed: ! completed } )
			.then( response => {
				const updatedTodos = this.state.todos.map( todo => {
					if ( todo.id === id ) {
						return {
							...todo,
							completed: response.data.completed,
						}
					}
					return todo
				} );
				this.setState( {
					todos: updatedTodos,
					loading: false,
				} );
			} )
			.catch( () => {
				this.setState( {
					error: true,
					loading: false,
				} )
			} )
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
			state: { error, loading, todoToShow  },
			toggleCompletion,
			updateTodoToShow,
			update,
		} = this;

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
					loading={ loading }
				/>
				{
					error
						? <ErrorTitle>Ops... Internal Server Error!</ErrorTitle>
						: (
							<Todos>
								{ todos.map( todo => (
									<Todo
										key={ todo.id }
										id={ todo.id }
										completed={ todo.completed }
										handleRemove={ remove }
										toggleCompletion={ toggleCompletion }
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
