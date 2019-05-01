<template>
    <div>
        <form @submit.prevent="addTodo">
            <input type="text" name="title" placeholder="add todo..." v-model="title">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
    // import uuid from 'uuid'

    export default {
        name: "AddTodo",
        data() {
            return {
                title: ""
            };
        },
        methods: {
            addTodo() {
                const newTodo = {
                    // id: uuid.v4(),
                    title: this.title,
                    completed: false
                };
                this.$emit("add-todo", newTodo);
                this.title = "";
            }
        }
    };
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }
</style>