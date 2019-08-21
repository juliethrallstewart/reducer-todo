export const initialState = {
	todoItems: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 3892987589
		}
	]
};

export const itemReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_ITEM':
			return {
				...state,
				todoItems: state.todoItems.map(
					todo => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
				)
			};
		case 'ADD_TODO':
			const newTodo = {
				item: action.payload,
				completed: false,
				id: Date.now()
			};
			return {
				...state,
				todoItems: [ ...state.todoItems, newTodo ]
			};
		case 'CLEAR_TODO':
			return {
				...state,
				// todoItems: state.todoList.filter(item => !item.completed)
				todoItems: state.todoItems.filter(({ completed }) => !completed)
			};
		default:
			return state;
	}
};
