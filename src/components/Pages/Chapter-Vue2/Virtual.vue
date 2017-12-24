<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        虚拟 DOM 树
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 2.x 和 React
      </h2>
    </header>

    <div class="fn fl-ns w-50-ns">
      <p class="f5 f5-m f5-l lh-copy measure mt0">
        在 Vue 2.x 中，引入了 Virtual Dom 技术。
        相比于之前 Vue 1.x，直接操作 Dom 树，Virtual Dom 提供了一种更加安全快速的视图改变机制。
        直接操作 DOM 会有两个问题：
      </p>
      <p class="f5 f5-m f5-l lh-copy measure mt0">
        1、即使一个小小的状态变更都要重新构造整棵 DOM；在浏览器当中，JavaScript 的运算在现代的引擎中非常快，但 DOM 本身是非常缓慢的东西。
      </p>
      <p class="f5 f5-m f5-l lh-copy measure mt0">2、会有牵连问题，比如 input 和 textarea 的会失去原有的焦点。</p>
      <p class="f5 f5-m f5-l lh-copy measure mt0">
        如果使用虚拟 DOM 技术，render 函数被调用的时候就会渲染并且返回虚拟 DOM 的树。
        这个树非常轻量，它的职责就是描述当前界面所应处的状态。
        将整个虚拟的树交给一个 patch 函数，负责把这些虚拟 DOM 真正施加到真实的 DOM 上。
      </p>
      <p class="f5 f5-m f5-l lh-copy measure mt0">
        在 Vue 应用中，组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染。在 React 应用中，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树。
      </p>
      <img src="../../../assets/v-dom.png" height="300"/>
    </div>
  </article>
</template>

<script>
    export default {
        name: "vitural-dom"
    }
</script>

<style scoped>

</style>
