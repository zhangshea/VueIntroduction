<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        声明式渲染
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 2.x 和 React
      </h2>
    </header>

    <div class="fn fl-ns w-50-ns">
      <p class="f4 f4-m f4-l lh-copy measure mt0">
        现在基本所有的框架都已经认同这个看法——DOM应尽可能是一个函数式到状态的映射。状态即是唯一的真相，而DOM状态只是数据状态的一个映射。如下图所示，所有的逻辑尽可能在状态的层面去进行，当状态改变的时候，View应该是在框架帮助下自动更新到合理的状态，而不是说当你观测到数据变化之后手动选择一个元素，再命令式地去改动它的属性。
      </p>
      <p class="f4 f4-m f4-l lh-copy measure mt0 b">
        View = render(State = f(oldState, action))
      </p>
      <img src="../../../assets/render.png" height="auto"/>
      <img src="../../../assets/one-d.png" height="auto"/>
    </div>
  </article>
</template>

<script>
    export default {
        name: "state-view"
    }
</script>

<style scoped>

</style>
