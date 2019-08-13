import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from '../src/components/TodoComponents/TodoList';
// import SearchResults from '../src/components/TodoComponents/SearchResults';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import Filter from '../src/components/TodoComponents/Filter';
import { initialState, itemReducer } from '../src/reducers/reducer';

function App () {
	// const [ state, dispatch ] = useReducer(itemReducer, initialState);
	// console.log(state);

	// toggleItem = (id) => {
	// 	console.log(id);
	// 	this.setState({
	// 		toDoList : this.state.toDoList.map((item) => {
	// 			if (item.id === id) {
	// 				return {
	// 					...item,
	// 					completed : !item.completed
	// 				};
	// 			}
	// 			else {
	// 				return item;
	// 			}
	// 		})
	// 	});
	// };

	// addItem = (itemName) => {
	// 	const newItem = {
	//     item      : itemName,
	//     completed : false,
	// 		id        : Date.now(),

	// 	};
	// };

	// clearCompleted = () => {
	// 	this.setState({
	// 	});
	// };

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
					<TodoForm />
				</div>
			</div>
			<TodoList
			// toDoList={this.state.toDoList}
			// toggleItem={this.toggleItem}
			// clearCompleted={this.clearCompleted}
			/>
			{/* <SearchResults /> */}
		</div>
	);
}

export default App;
