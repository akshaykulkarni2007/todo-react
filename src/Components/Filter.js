import React, { useState } from "react";

const Filter = ({ applyFilter }) => {
	const [text, setText] = useState("");

	const handleOnChange = e => {
		setText(e.target.value);
	};

	const handlekeyUp = e => {
		setText(e.target.value);
		applyFilter(text);
	};

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				placeholder="Filter"
				value={text}
				onChange={handleOnChange}
				onKeyUp={handlekeyUp}
			/>
		</div>
	);
};

export default Filter;
