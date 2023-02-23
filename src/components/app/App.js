import TodoList from "../todo-list/TodoList";
import TodoHeader from "../todo-header/TodoHeader";
import TodoSearch from "../todo-search/TodoSearch";
import TodoAdd from "../todo-add/TodoAdd";
import { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		todos: [
			{ name: "Learn HTML", completed: false, important: false, id: 1 },
			{ name: "Learn JS", completed: false, important: false, id: 2 },
			{ name: "Learn JS1", completed: false, important: false, id: 3 },
			{ name: "Learn JS3", completed: false, important: false, id: 4 },
		],
		status: "all",
		searchText: '',
	};
	// this = App

	addTodo = name => {
		// this = App
		let oldId = this.state.todos.map(item => item.id).at(-1) || 0;
		console.log("oldId: ", oldId);
		let newId = oldId + 1;
		console.log("newId: ", newId);
		const newTodo = {
			name,
			completed: false,
			important: false,
			id: newId,
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	doneTodo = id => {
		this.setState(({ todos }) => {
			let idx = todos.findIndex(item => item.id === id); //0-1
			let upTodo = todos.filter(item => item.id === id)[0]; // [{...}]
			const mutableObj = {
				...upTodo,
				completed: !upTodo.completed, // important: !upTodo.important
			};
			return {
				todos: [...todos.slice(0, idx), mutableObj, ...todos.slice(idx + 1)],
			};
		});
	};

	toggleImportant = id => {
		this.setState(({todos}) => {
			let index = todos.findIndex(el => el.id === id)
			let oldTodo= todos[index]
			let before = todos.slice(0, index);
			let after = todos.slice( index + 1);
			const updateTodo = {
				...oldTodo, 
				important: !oldTodo.important,
			};
			return {
				todos: [...before, updateTodo, ...after],
			};
		});
	};

	searchTodo = (todoArr, text) => {
		if (text === undefined || text?.length === 0) {
			return todoArr;
		} else {
			return todoArr.filter(el => el.name.toLowerCase().includes(text));	
			};
		}

	setSearchText = text => {
		this.setState({searchText: text })
	}

	deleteTodo = id => {
		this.setState(({ todos }) => {
			// return { todos: [...]}; // .filter() ---> []
			return { todos: todos.filter(el => el.id !== id) };
		});
	};

	setStatus = text => {
		this.setState({ status: text });
	};

	filterTodo = (mass, status) => {
		switch (status) {
			case "all":
				return mass;
			case "active":
				// return mass.filter(el => el.completed === false);
				return mass.filter(el => !el.completed);
			case "done":
				// return mass.filter(el => el.completed === true);
				return mass.filter(el => el.completed);
			default:
				return mass;
		}
	};

	render() {
		const { 
			addTodo, 
			doneTodo, 
			deleteTodo, 
			setStatus, 
			filterTodo, 
			toggleImportant,
			setSearchText,
			searchTodo,
		} = this; // methods

		const { todos, status, searchText } = this.state; //state data
		const doneCount = todos.filter(el => el.completed).length; //3
		const allTodo = todos.length - doneCount; // 7-3 = 4
		const filteredTodo = searchTodo(filterTodo(todos, status), searchText);
		console.log("findTodo ", filteredTodo);
		return (
			<div className='wrap'>
				<TodoHeader 
				allTodo={allTodo} 
				doneCount={doneCount} />
				<TodoSearch 
				onSearch={setSearchText} 
				onSetStatus={setStatus} 
				currentStatus={status} />
				<TodoList
					onDoneTodo={doneTodo}
					todoArr={filteredTodo}
					onDelete={deleteTodo}
					onToggleImportent={toggleImportant}
				/>
				<TodoAdd 
				onAddTodo={addTodo} />
			</div>
		);
	}
}

export default App;
