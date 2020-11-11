import React, { useState } from "react";
import {
	Form,
	FormInputAdd,
	FormInputEdit,
	FormBtnAdd,
	FormBtnEdit,
} from "./elements";

function TodoForm({ onSubmit, edit }) {
	const [input, setInput] = useState(edit ? edit.value : "");
	const [placeholder] = useState(edit ? edit.value : "Add Todo");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};

	return (
		<Form onSubmit={handleSubmit}>
			{edit ? (
				<>
					<FormInputEdit
						type='text'
						value={input}
						name='text'
						onChange={handleChange}
						autoFocus
					/>
					<FormBtnEdit>Update</FormBtnEdit>
				</>
			) : (
				<>
					<FormInputAdd
						type='text'
						placeholder={placeholder}
						name='text'
						onChange={handleChange}
						value={input}
						autoFocus
					/>
					<FormBtnAdd>Add</FormBtnAdd>
				</>
			)}
		</Form>
	);
}

export default TodoForm;
