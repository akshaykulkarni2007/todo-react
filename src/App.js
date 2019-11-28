import React, { Component } from "react";

import uuid from "uuid";

// components
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddTodoForm from "./Components/AddTodoForm";
import Filter from "./Components/Filter";

//css
import "./App.css";

class App extends Component {
	state = {
		todoList: [],
		filterText: ""
	};

	componentDidMount() {
		this.getTodos();
	}

	getTodos = () => {
		const todoList = JSON.parse(localStorage.getItem("todos")) || [];
		this.setState({ todoList });
	};

	addTodo = title => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false
		};

		this.setState({ todoList: [newTodo, ...this.state.todoList] }, () => {
			localStorage.setItem("todos", JSON.stringify(this.state.todoList));
		});
	};

	toggleComplete = id => {
		const todoList = this.state.todoList.map(todo => {
			if (todo.id === id) todo.completed = !todo.completed;
			return todo;
		});
		this.setState({ todoList }, () => {
			localStorage.setItem("todos", JSON.stringify(this.state.todoList));
		});
	};

	deleteTodo = id => {
		const todoList = this.state.todoList.filter(todo => todo.id !== id);
		this.setState({ todoList }, () => {
			localStorage.setItem("todos", JSON.stringify(this.state.todoList));
		});
	};

	applyFilter = filterText => {
		this.setState({ filterText });
	};

	render() {
		return (
			<>
				<Header />
				<div className="container my-4">
					<AddTodoForm addTodo={this.addTodo} />
					<h4 className="mb-2">TODO List</h4>
					<Filter applyFilter={this.applyFilter} />
					<TodoList
						todos={this.state.todoList}
						filterText={this.state.filterText}
						toggleComplete={this.toggleComplete}
						deleteTodo={this.deleteTodo}
					/>
				</div>
			</>
		);
	}
}

export default App;
