<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        Web 前端
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 概览
      </h2>
    </header>
    <div class="fn fl-ns w-50-ns">
      <p class="f4 lh-copy measure mt0-ns">
        Web 视图是 Web 前端中最核心的组成部分，前端之所以称之为前端，正是因为其与用户直接发生联系，为用户提供数据的可见形式以及用户与数据的交互操作。在现代浏览器中，使用一种叫做 DOM 树的结构来管理前端视图。DOM 树是一个树形结构，对应于 HTML 的树形描述结构，按照 HTML 的描述一一对应的创建 DOM 结点并绘制。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        当事件发生时，通常会伴随着数据的变化，同时随着数据变化，用户可见的页面也可能进行对应的重新绘制和渲染，也即执行对应的 DOM 操作。在前端中，数据、事件以及 DOM 操作是最核心的内容，如何妥善的处理这三者就是 Web 前端最重要的任务。
      </p>
    </div>
  </article>
</template>

<script>
    export default {
        name: "web-front-end"
    }
</script>

<style scoped>

</style>
