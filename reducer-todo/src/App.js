import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from '../src/components/TodoComponents/TodoList';
// import SearchResults from '../src/components/TodoComponents/SearchResults';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import Filter from '../src/components/TodoComponents/Filter';
import { initialState, itemReducer } from '../src/reducers/reducer';

function App () {
	const [ state, dispatch ] = useReducer(itemReducer, initialState);

	const toggleItem = id => dispatch({ type: 'TOGGLE_ITEM', payload: id });

	// const toggleItem = id => console.log(id);

	const addTodo = item => dispatch({ type: 'ADD_TODO', payload: item });

	const clearCompleted = () => dispatch({ type: 'CLEAR_TODO' });
	console.log(state, 'state');
	return (
		<div className="App">
			<div className="header">
				<div className="input-search">
					<Filter />
				</div>
				<div className="title">
					<h1>My Todo List</h1>
				</div>
				<div className="input-add">
					<TodoForm addTodo={addTodo} clear={clearCompleted} />
				</div>
			</div>
			<TodoList todoList={state.todoItems} toggle={toggleItem} />
		</div>
	);
}
export default App;
