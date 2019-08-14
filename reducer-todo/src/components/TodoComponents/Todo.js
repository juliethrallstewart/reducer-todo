import React from 'react';
import './Todo.css';

const Todo = ({ id, item, completed, toggle }) => {
	return (
		<div className={`item${completed ? ' completed' : ''}`} onClick={() => toggle(id)}>
			{item}
		</div>
	);
};

export default Todo;
