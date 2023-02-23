import React from "react";
import "./TodoHeader.css";

const TodoHeader = props => {
	return (
		<div className='d-flex header'>
			<h1>Todo List</h1>
			<h2>
				{props.allTodo} more todo, done {props.doneCount}</h2>
		</div>
	);
};

export default TodoHeader;
