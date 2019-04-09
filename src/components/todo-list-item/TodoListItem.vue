<template>
  	<li>		 
    	<span>{{ todo.text }}</span>
    	<button @click="$emit('remove', todo.id)">
			<img src="../../assets/close.svg" alt="">
		</button>
  	</li>
</template>

<style src="./TodoListItem.css"></style>
<script src="./TodoListItem.js"></script>