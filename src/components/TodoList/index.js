import React, { Component } from 'react';
import uuid from 'uuid/v4';

import Navigation from '../Navigation';
import Todo from '../Todo';

import { Todos, Wraper } from './styles';

const initTodos = [
	{
		id: uuid(),
		task: 'Buy running shoes',
		completed: false,
	},
	{
		id: uuid(),
		task: 'Run two miles with Lisa',
		completed: true,
	},
];

class TodoList extends Component {
	state = {
		todos: initTodos,
		todoToShow: 'all',
	};

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
		const { todoToShow } = this.state;

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
