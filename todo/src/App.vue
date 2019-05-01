<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header msg="Welcome to Your Vue.js App"/>
    <Todos v-bind:todos='todos' v-on:del-todo="deleteTodo"/>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Todos from "./components/Todos.vue";

export default {
  name: "app",
  components: {
    Header,
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'title one',
          completed: false 
        },
        {
          id: 2,
          title: 'title two',
          completed: false 
        },
        {
          id: 3,
          title: 'title three',
          completed: false 
        }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
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
</style>
