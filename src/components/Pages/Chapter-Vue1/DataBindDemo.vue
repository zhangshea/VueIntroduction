<template>
    <article class="cf ph3 ph5-ns pv5">
        <header class="fn fl-ns w-50-ns pr4-ns">
            <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                数据绑定 Demo
            </h1>
            <h2 class="f3 mid-gray lh-title">
                A short survey on Vue.JS - Vue 1.x 和 AngularJS
            </h2>
        </header>
        <div class="fn fl-ns w-50-ns">
            <TodoListVue1></TodoListVue1>
        </div>
    </article>
</template>

<script>
    import TodoListVue1 from "./TodoListDemoVue1/TodoListVue1"
    export default {
        name: "data-bind",
        components: {
            TodoListVue1
        }
    }
</script>

<style scoped>

</style>
