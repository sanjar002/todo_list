import "./TodoListItem.css";
const TodoListItem = props => {
	const { onDoneTodo, onDelete } = props; // methods
	const { id, completed, important, onToggleImportent } = props; //data todos[]
	let classNames = "d-flex";
	if (completed) {
		classNames += " done";
	}

	if (important) {
		classNames += " important";
	}

	return (
		<li className='list-group-item'>
			<span className={classNames}>
				<span
					className='todo-title'
					onClick={() => {
					onDoneTodo(id);
	               }}>
					{props.name}
				</span>
				<button className='btn btn-danger actions' onClick={() => onDelete(id)}>
					<i className='bi bi-trash3'></i>
				</button>
				<button onClick={() => onToggleImportent(id)} className='btn btn btn-outline-success actions'>
					<i className='bi bi-exclamation-octagon'></i>
				</button>
			</span>
		</li>
	);
};

export default TodoListItem;
