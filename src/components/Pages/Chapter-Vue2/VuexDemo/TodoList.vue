<template>
    <div>
        <AddTodo v-bind:id="todoId"></AddTodo>
        <GetTodo v-bind:id="todoId"></GetTodo>
    </div>
</template>

<script>
    import AddTodo from './components/AddTodo'
    import GetTodo from './components/GetTodo'

    export default {
        name: "todo-list",
        props: ["id"],
        data: function() {
            return {
                todoId: this.id
            }
        },
        components: {
            AddTodo,
            GetTodo
        },
        created: function() {
            console.log(this.id)
        }
    }
</script>

<style scoped>

</style>