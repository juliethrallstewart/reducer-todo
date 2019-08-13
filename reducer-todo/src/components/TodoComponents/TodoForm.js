import React, { useState, useReducer } from 'react';
import { initialState, itemReducer } from '../../reducers/reducer';

const TodoForm = () => {
	const [ newItem, setNewItem ] = useState();

	const [ state, dispatch ] = useReducer(itemReducer, initialState);
	console.log(state);

	const handleChanges = e => {
		setNewItem(e.target.value);
	};

	return (
		<div>
			<input type="text" value={newItem} name="newItem" placeholder="enter todo item" onChange={handleChanges} />
			<button onClick={() => dispatch({ type: 'ADD_TODO', payload: newItem })}>Submit</button>
		</div>
	);
};

export default TodoForm;
