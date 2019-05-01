<template>
	<div class="header">
		<h1>{{ msg }}</h1>
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		props: {
			msg: String
		}
	};
</script>


<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	.header {
		background: #333;
		color: #fff;
		text-align: center;
		padding: 10px;
	}

	.header a {
		color: #fff;
		padding-right: 5px;
		text-decoration: none;
	}
</style>