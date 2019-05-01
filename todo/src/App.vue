<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<Header msg="Welcome to Your ToDO Vue.js App" />
		<AddTodo v-on:add-todo="addTodo" />
		<Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
	</div>
</template>

<script>
	import Header from "./components/layout/Header";
	import Todos from "./components/Todos";
	import AddTodo from "./components/AddTodo";

	import axios from "axios";

	export default {
		name: "app",
		components: {
			Header,
			Todos,
			AddTodo
		},
		data() {
			return {
				todos: []
			};
		},
		methods: {
			deleteTodo(id) {
				axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
					.then(res => this.todos = this.todos.filter(todo => todo.id !== id))
					.catch(error => console.log(error));
			},
			addTodo(newTodo) {
				const { title, completed } = newTodo;

				axios.post('https://jsonplaceholder.typicode.com/todos', {
					title,
					completed
				})
					.then(res => this.todos = [...this.todos, res.data])
					.catch(err => console.log(err));
			}
		},
		created() {
			axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
				.then(res => this.todos = res.data)
				.catch(error => console.log(error));
		}
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.btn {
		display: inline-block;
		border: none;
		background: #555;
		color: #fff;
		padding: 10px 20px;
		cursor: pointer;
	}

	.btn:hover {
		background: #666;
	}
</style>