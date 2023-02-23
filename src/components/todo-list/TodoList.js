import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";

const TodoList = props => {
	if (props.todoArr.length === 0) {
		return <h4 className='text-center'>todo not found</h4>;
	};

	return (
		<ul className='list-group'>
			{props.todoArr.map(todo => (
				<TodoListItem {...props} key={todo.id} {...todo} />
			))}
		</ul>
	);
};

export default TodoList;
