// export const initialState = [
// 	{
// 		item: 'Learn about reducers',
// 		completed: false,
// 		id: 3892987589
// 	}
// ];

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
		case 'ADD_TODO':
			const newTodo = {
				item: action.payload,
				completed: false,
				id: Date.now()
			};
			return {
				...state,
				todoItems: [...state.todoItems, newTodo]
			};
		default:
			return state;
	}
};
