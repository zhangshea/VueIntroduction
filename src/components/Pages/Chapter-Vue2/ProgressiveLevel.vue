<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        前端架构的复杂度
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 2.x 和 React
      </h2>
    </header>

    <div class="fn fl-ns w-50-ns">
      <div class="pa4">
        <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
          <p class="f5 f5-m f5-l lh-copy measure mt0">
            可能在任何情况下都需要声明式的渲染功能，并希望尽可能避免手动操作，或者说是可变的命令式操作，希望尽可能地让DOM的更新操作是自动的，状态变化的时候它就应该自动更新到正确的状态；我们需要组件系统，将一个大型的界面切分成一个一个更小的可控单元；客户端路由——这是针对单页应用而言，不做就不需要，如果需要做单页应用，那么就需要有一个URL对应到一个应用的状态，就需要有路由解决方案；大规模的状态管理——当应用简单的时候，可能一个很基础的状态和界面映射可以解决问题，但是当应用变得很大，涉及多人协作的时候，就会涉及多个组件之间的共享、多个组件需要去改动同一份状态，以及如何使得这样大规模应用依然能够高效运行，这就涉及大规模状态管理的问题，当然也涉及到可维护性，还有构建工具。现在，如果放眼前端的未来，当HTTP2普及后，可能会带来构建工具的一次革命。但就目前而言，尤其是在中国的网络环境下，打包和工程构建依然是非常重要且不可避免的一个环节。
          </p>
          <cite class="f6 ttu tracked fs-normal">―尤雨溪</cite>
        </blockquote>
      </div>
      <img src="../../../assets/fef.png" height="auto"/>
    </div>
  </article>
</template>

<script>
    export default {
        name: "progressive-level"
    }
</script>

<style scoped>

</style>
