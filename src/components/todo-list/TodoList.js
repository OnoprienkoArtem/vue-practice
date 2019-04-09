import BaseInputText from "../base-input-text/BaseInputText.vue";
import TodoListItem from "../todo-list-item/TodoListItem.vue";

let nextTodoId = 1;

export default {
    components: {
        BaseInputText,
        TodoListItem
    },
    data() {
        return {
            newTodoText: "",
            todos: [
                {
                    id: nextTodoId++,
                    text: "Learn Vue"
                },
                {
                    id: nextTodoId++,
                    text: "Learn about single-file components"
                },
                {
                    id: nextTodoId++,
                    text: "Fall in love"
                }
            ]
        };
    },
    methods: {
        addTodo() {
            const trimmedText = this.newTodoText.trim();
            if (trimmedText) {
                this.todos.push({
                    id: nextTodoId++,
                    text: trimmedText
                });
                this.newTodoText = "";
            }
        },
        removeTodo(idToRemove) {
            this.todos = this.todos.filter(todo => {
                return todo.id !== idToRemove;
            });
        }
    }
};