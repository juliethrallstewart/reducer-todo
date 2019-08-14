import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, toggle }) => {
	return (
		<div>
			List of items
			{todoList.map(todo => {
				// return <Todo key={item.id} item={item.item} id={item.id} toggle={toggle} />;
				return <Todo key={todo.id} {...todo} toggle={toggle} />;
			})}
		</div>
	);
};

export default TodoList;
