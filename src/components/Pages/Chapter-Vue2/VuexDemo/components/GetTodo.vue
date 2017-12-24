<template>
    <div id="current-todos" class="container">
        <h3 v-if="todos.length > 0">Unfinish ({{todos.length}})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos">
                {{todo.body}}
                <div class="btn-group">
                    <button type="button" @click="finish(todo)">Finish</button>
                    <button type="button" @click="change(todo)">Change</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'GetTodo',
        props: ["id"],
        methods: {
            finish(todo){
                this.$store.dispatch('completeTodo', todo)
            },
            change(todo){
                this.$store.dispatch('changeTodo', todo)
            }
        },
        computed: {
            todos(){
                console.log("computed todos ", this.id);
                console.log(this.$store.getters.todos(this.id));
                return this.$store.getters.todos(this.id)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        overflow: auto;
    }
    .btn-group{
        float: right;
    }
</style>
