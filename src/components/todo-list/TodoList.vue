<template>
  	<div>
		<div class="input-wrapper">
			<BaseInputText 
				v-model="newTodoText" 
				placeholder="New todo" 
				@keydown.enter="addTodo"
			/>
			<button class="add" @click="addTodo">add</button>
		</div>
    	<ul v-if="todos.length">
      		<TodoListItem 
			  	v-for="todo in todos" 
				:key="todo.id" 
				:todo="todo" 
				@remove="removeTodo"
			/>
    	</ul>
    	<p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  	</div>
</template>

<style src="./TodoList.css"></style>
<script src="./TodoList.js"></script>