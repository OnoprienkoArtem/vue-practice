<template>
	<div id="app">
		<Header msg='TODO app'/>		
		<TodoList/>
	</div>
</template>


<script>
	import Header from './components/header/Header.vue'
	import TodoList from './components/todo-list/TodoList.vue'

	export default {
		components: {
			TodoList,
			Header
		}
	
	}

</script>

<style>
	*, *::before, *::after {
		box-sizing: border-box;
	}

	#app {
		max-width: 400px;
		margin: 0 auto;
		line-height: 1.4;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;	
	}


</style>