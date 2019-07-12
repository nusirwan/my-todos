import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import uuid from 'uuid/v4';

import axios from '../../axios'
import Navigation from '../Navigation';
import Todo from '../Todo';

import { Todos, LoaderWrap, Wraper } from './styles';

class TodoList extends Component {
	state = {
		todos: [],
		todoToShow: 'all',
		loading: true,
	};

	async componentDidMount() {
		const respone = await axios.get( '/mytodos' );

		setTimeout( () => {
			this.setState( {
				todos: respone.data,
				loading: false,
			} )
		}, 1000 );
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
		const { add, updateTodoToShow, remove, toggleCompletion, update } = this;
		const { todoToShow, loading } = this.state;

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
								type="Oval"
								color="grey"
								height={ 32 }
								width={ 32 }
							/>
						</LoaderWrap>
					)
				}
				<Todos>
					{ todos.map( todo => (
						<Todo
							key={ todo.id }
							id={ todo.id }
							task={ todo.task }
							completed={ todo.completed }
							handleRemove={ remove }
							handleCompletion={ toggleCompletion }
							updateTodo={ update }
						/>
					) ) }
				</Todos>
			</Wraper>
		);
	}
}

export default TodoList;
