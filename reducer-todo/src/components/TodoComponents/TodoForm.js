import React, { useState, useReducer } from 'react';
import { initialState, itemReducer } from '../../reducers/reducer';

const TodoForm = ({ addTodo, clear }) => {
	const [ item, setNewItem ] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		addTodo(item);
		setNewItem('');
	};

	const handleChanges = e => {
		e.preventDefault();
		setNewItem(e.target.value);
	};

	return (
		<>
		<form onSubmit={handleSubmit}>
			<input type="text" value={item} name="item" placeholder="enter todo item" onChange={handleChanges} />
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
			<button type="text" onClick={clear}>
			Clear
		</button>
		</>
	);
};

export default TodoForm;
