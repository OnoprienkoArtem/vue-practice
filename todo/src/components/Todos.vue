<template>
  <div>
    <h1>Todos</h1>
    <div :key="todo.id + i" v-for="(todo, i) in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
    </div>
  </div>
</template>


<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>


<style scoped>
</style>