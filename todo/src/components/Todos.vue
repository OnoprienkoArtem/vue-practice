<template>
    <div>
        <h1>Todos</h1>
        <div v-for='todo in todos' :key='todo.id'>
            <div>{{todo.title}}</div>
        </div>
    </div>
</template>


<script>
export default {
        name: 'Todos',
        props: ['todos']
    }
</script>


<style scoped>

</style>
