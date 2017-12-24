<template>
    <article class="cf ph3 ph5-ns pv5">
        <header class="fn fl-ns w-50-ns pr4-ns">
            <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                状态管理 Demo
            </h1>
            <h2 class="f3 mid-gray lh-title">
                A short survey on Vue.JS - Vue 2.x 和 React
            </h2>
        </header>

        <div class="fn fl-ns w-50-ns">
            <TwoTodoLists></TwoTodoLists>
        </div>
    </article>
</template>

<script>
    import TwoTodoLists from "./VuexDemo/TwoTodoLists"

    export default {
        name: "vuex-demo",
        components: {
            TwoTodoLists
        }
    }
</script>

<style scoped>

</style>