<template>
    <div class="mw9 center ph3-ns">
        <div class="cf ph2-ns">
            <div class="fl w-100 w-50-ns pa2">
                <div class="outline bg-white pv4">
                    <TodoList id="1"></TodoList>
                </div>
            </div>
            <div class="fl w-100 w-50-ns pa2">
                <div class="outline bg-white pv4">
                    <TodoList id="2"></TodoList>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoList from "./TodoList"

    export default {
        name: "two-todo-lists",
        components: {
            TodoList
        }
    }
</script>

<style scoped>

</style>