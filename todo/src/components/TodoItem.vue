<template>
	<div>
		<p>{{todo.title}}</p>
	</div>
</template>

<script>
	export default {
		name: "TodoItem",
		props: ['todo'],
	};
</script>

<style scoped>
	.todo-item {
		background: #f4f4f4;
		padding: 10px;
		border-bottom: 1px dotted #ccc;
	}

	.is-complete {
		text-decoration: line-through;
	}

	.del {
		background: #ff0000;
		color: #fff;
		border: none;
		padding: 5px 10px;
		border-radius: 50%;
		cursor: pointer;
		float: right;
	}
</style>