import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
	const [text, setText] = useState("");

	const handleOnChange = e => {
		setText(e.target.value);
	};

	const handlekeyUp = e => {
		if (e.keyCode === 13) {
			addTodo(text);
			setText("");
		}
	};

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				placeholder="Add TODO"
				value={text}
				onChange={handleOnChange}
				onKeyUp={handlekeyUp}
			/>
		</div>
	);
};

export default AddTodoForm;
