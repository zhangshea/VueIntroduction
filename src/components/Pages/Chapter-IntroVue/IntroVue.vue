<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        Vue 概览
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 概览
      </h2>
    </header>
    <div class="fn fl-ns w-50-ns">
      <p class="f4 lh-copy measure mt0-ns">
        “Vue (读音 /vju/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。”
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        Vue 目前的版本是 2.x，以上的描述也是针对最新的 2.x 版本来说的。从定位上来看，Vue 2.x 和 1.x 的定位是发生了很大变化的。
        简单的说，Vue 1.x 的定位是一个基于轻量 MVVM 架构的 Web 界面库，而 Vue 2.x 的定位就如上面所说，是一个渐进式框架。这就意味着新的版本中，Vue 所能提供的功能变多，不过这并不意味着 Vue 变得更加难于上手，这就是渐进式框架所带来的好处。同时，Vue 的整体思想是拥抱经典的 Web 技术，并在其上进行扩展。这同样使得 Vue 便于上手。这也是 Vue 的两个非常重要的核心思想，渐进式和拥抱经典。
        事实上，在 Vue 1.x 的设计中，参考了 AngularJS 中的设计，而在 Vue 2.x 的设计中，参考了 React 中的设计，但是 Vue 又与 AngularJS 和 React 有着非常明显的区别。
      </p>
    </div>
  </article>
</template>

<script>
  export default {
    name: "intro-vue"
  }
</script>

<style scoped>

</style>
