<template>
    <div id="get-todo">
        <input id="todo-input"
               :value="newTodo"
               @change="getTodo"
               @keyup.enter="addTodo"
               placeholder="add a todo here">
        <button @click="addTodo">Add Todo</button>
    </div>
</template>
<script>
    export default{
        name: 'AddTodo',
        props: ["id"],
        data: function () {
            return {
                newInput: ""
            }
        },
        methods: {
            getTodo(e) {
                this.newInput = e.target.value
            },
            addTodo(){
                this.$store.dispatch('addTodo',
                    {
                        body: this.newInput,
                        owner: this.id
                    }
                );
            }
        },
        computed: {
            newTodo(){
                return this.$store.getters.newTodo
            }
        }

    }
</script>
