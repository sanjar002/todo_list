import "./TodoSearch.css";

const TodoSearch = ({ onSetStatus, currentStatus, onSearch, }) => {
	const btns = [
		{ btnName: "All", status: "all" },
		{ btnName: "Active", status: "active" },
		{ btnName: "Done", status: "done" },
	];

	const searchItem = event => {
		onSearch(event.target.value.toLowerCase());
	};
	return (
		<div className='d-flex '>
			<input className='form-control input' onChange={searchItem} type='text' placeholder='Поиск' />
			<div>
				{btns.map(btn => {
					let clazz =
						currentStatus === btn.status ? "btn-info" : "btn-outline-secondary";
					return (
						<button
							key={btn.status}
							className={`btn ${clazz}`}
							onClick={() => onSetStatus(btn.status)}>
							{btn.btnName}
						</button>
					);
				})}
				{/* <button className='btn btn-info' onClick={() => onSetStatus("active")}>
					All
				</button>
				<button className='btn btn-outline-secondary'>Active</button>
				<button className='btn btn-outline-secondary'>Done</button> */}
			</div>
		</div>
	);
};

export default TodoSearch;
