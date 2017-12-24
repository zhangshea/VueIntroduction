<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        SSR 和 Mobile Native
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 2.x 和 React
      </h2>
    </header>

    <div class="fn fl-ns w-50-ns">
      <p class="f4 f4-m f4-l lh-copy measure mt0">
        Vue 2.x 作为整体解决方案，还在两个新的领域进行尝试。
      </p>
      <p class="f4 f4-m f4-l lh-copy measure mt0">
        一个是服务器端渲染，也就是 Server Side Render (SSR)，这个主要是为了提供一体化的开发体验，提高客户端的性能，而且很重要的是可以进行 SEO。
      </p>
      <p class="f4 f4-m f4-l lh-copy measure mt0">
        另一个是原生渲染，也就是嵌入 Native 开发。这个主要是为了提供界面的复用，提供敏捷的开发体验，目前还在试验阶段，通过 Weex 进行实现（阿里的开源项目）。
      </p>
      <img src="../../../assets/SSR.png" height="auto"/>
    </div>
  </article>
</template>

<script>
    export default {
        name: "others"
    }
</script>

<style scoped>

</style>
