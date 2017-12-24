<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        组件系统
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 2.x 和 React
      </h2>
    </header>

    <div class="fn fl-ns w-50-ns">
      <p class="f5 f5-m f5-l lh-copy measure mt0">
        相信基本上所有的现代框架都已经走向了组件化道路，Web Components 从规范层面做这个实践。主流框架都有各有不同的封装，但核心思想都是一样，把UI结构映射到恰当的组件树。
      </p>
      <p class="f5 f5-m f5-l lh-copy measure mt0">
        在Vue中，父子组件之间的通信是通过 props 传递。从父向子单向传递；
        而如果子组件想要在父组件作用里面产生副作用，就需要去派发事件。
        这样就形成一个基本的父子通信模式，在涉及大规模状态管理的时候会有额外的方案（vuex）。
      </p>
      <img src="../../../assets/props.png" height="409" width="469"/>
    </div>
  </article>
</template>

<script>
    export default {
        name: "components"
    }
</script>

<style scoped>

</style>
