<template>
    <div class="">
        <input type="text"
               placeholder="Add a todo"
               v-model="newTodoText"
               v-on:keyup.enter="addNewTodo">
        <ul>
            <li v-for="todo in todos">
                {{todo}}
                <div class="btn-group">
                    <button type="button" @click="finish(todo)">Finish</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "todo-list-vue1",
        data : function() {
            return {
                todos: [],
                newTodoText: ""
            }
        },
        methods: {
            addNewTodo: function() {
                this.todos.push(this.newTodoText);
                this.newTodoText = '';
            },
            finish: function(todo) {
                this.todos.splice(this.todos.indexOf(todo), 1)
            }
        }
    }
</script>

<style scoped>
    li {
        overflow: auto;
    }
    .btn-group{
        float: right;
    }
</style>