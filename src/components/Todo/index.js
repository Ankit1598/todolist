import React, { useState } from "react";
import {
	IncompleteTodo,
	CompleteTodo,
	TodoIcons,
	TodoIconDelete,
	TodoIconEdit,
} from "./elements";
import TodoForm from "../TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	return todos.map((todo, index) => (
		<>
			{todo.isComplete ? (
				<CompleteTodo key={index}>
					<div key={todo.id} onClick={() => completeTodo(todo.id)}>
						{todo.text}
					</div>
					<TodoIcons>
						<TodoIconEdit
							onClick={() => setEdit({ id: todo.id, value: todo.text })}
						/>
						<TodoIconDelete onClick={() => removeTodo(todo.id)} />
					</TodoIcons>
				</CompleteTodo>
			) : (
				<IncompleteTodo key={index}>
					<div key={todo.id} onClick={() => completeTodo(todo.id)}>
						{todo.text}
					</div>
					<TodoIcons>
						<TodoIconEdit
							onClick={() => setEdit({ id: todo.id, value: todo.text })}
						/>
						<TodoIconDelete onClick={() => removeTodo(todo.id)} />
					</TodoIcons>
				</IncompleteTodo>
			)}
		</>
	));
}

export default Todo;
