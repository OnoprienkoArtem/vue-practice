<template>
  <div>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
  name: "Home",
  components: {
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
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(error => console.log(error));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (this.todos = res.data))
      .catch(error => console.log(error));
  }
};
</script>

<style>
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