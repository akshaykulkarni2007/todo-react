import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<span>
				<input
					type="checkbox"
					className="mr-4"
					onChange={() => toggleComplete(todo.id)}
					checked={todo.completed ? "checked" : ""}
				/>
				{todo.completed ? <del>{todo.title}</del> : todo.title}
			</span>
			<span
				className="badge badge-danger badge-pill"
				onClick={() => deleteTodo(todo.id)}>
				X
			</span>
		</li>
	);
};

export default TodoItem;
