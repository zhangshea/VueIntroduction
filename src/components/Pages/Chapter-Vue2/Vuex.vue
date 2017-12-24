<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        状态管理
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 2.x 和 React
      </h2>
    </header>

    <div class="fn fl-ns w-50-ns">
      <p class="f5 f5-m f5-l lh-copy measure mt0">
        State 驱动 View 的渲染，而用户对 View 进行操作产生 Action，会使State产生变化，从而导致 View 重新渲染。
      </p>
      <p class="f5 f5-m f5-l lh-copy measure mt0">
        组件之间需要共享状态的时候呢？需要一个全局的状态管理机制， Vuex 就是为 Vue 设计的用来进行全局状态管理机制的方案。
        Vuex 通过 Actions 驱动 Mutations 来对全局 State 进行变更，通过设置 getter 函数来读取状态。
      </p>
      <img src="../../../assets/vuex.png" height="500"/>
    </div>
  </article>
</template>

<script>
    export default {
        name: "vuex"
    }
</script>

<style scoped>

</style>
