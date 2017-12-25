<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        新的模式
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 1.x 和 AngularJS
      </h2>
    </header>
    <div class="fn fl-ns w-50-ns">
      <p class="f4 lh-copy measure mt0-ns">
        为了解决以上的问题，前端领域出现了很多的框架，具有良好的设计模式和一些新的机制。
        比较早期的框架比如 Backbone 就是在 MVC 设计模式的基础上增加了一定的面向数据的机制，从而在一段时期被广泛应用。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        之后出现的 AngularJS 在 MVC 的基础上，增加了完整的数据双向绑定机制，并在之后的版本增加了模块化机制。
        但是 AngularJS 同时还发布了一系列的文件组织和数据流动机制，只有当整个项目完整的使用 AngularJS 来开发时，才能感受到 AngularJS 的优点。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        在15年10月，Vue 1.0 正式发布。Vue 1.0 是一个参考了很多 AngularJS 设计制作出的轻量化的基于 MVVM 的前端框架。
        相比于 AngularJS 而言，仅保留了两个最核心的机制：
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        1、 数据双向绑定
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        2、 前端模块组件化
      </p>
    </div>
  </article>
</template>

<script>
    export default {
        name: "vue-and-angular"
    }
</script>

<style scoped>

</style>
