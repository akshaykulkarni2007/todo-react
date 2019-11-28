import React from "react";

import TodoItem from "./TodoItem";

const TodoList = ({
	todos = [],
	filterText = "",
	toggleComplete,
	deleteTodo
}) => {
	const todoItems = todos
		.filter(todo => todo.title.toLowerCase().includes(filterText.toLowerCase()))
		.map(todo => (
			<TodoItem
				key={todo.id}
				todo={todo}
				toggleComplete={toggleComplete}
				deleteTodo={deleteTodo}
			/>
		));

	return (
		<ul className="list-group">
			{todos.length ? todoItems : "Nothing to display"}
		</ul>
	);
};

export default TodoList;
