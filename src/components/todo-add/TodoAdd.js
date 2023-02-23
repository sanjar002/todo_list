import React, { Component } from "react";

class TodoAdd extends Component {
	state = {
		text: "",
	};

	setText = event => {
		this.setState({ text: event.target.value });
	};

	addTodo = () => {
		this.props.onAddTodo(this.state.text);
		this.setState({ text: "" });
	};

	render() {
		const { addTodo, setText, state } = this;
		return (
			<div className='d-flex'>
				<input
					value={state.text}
					className='form-control'
					type='text'
					placeholder='введите задачу'
					onChange={setText} />
				<button className='btn btn-success' onClick={addTodo}>Add</button>
			</div>
		);
	};
};

export default TodoAdd;
