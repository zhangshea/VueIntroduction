<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        事件驱动
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 概览
      </h2>
    </header>
    <div class="fn fl-ns w-50-ns">
      <p class="f4 lh-copy measure mt0-ns">
        在面向事件的设计模式中，数据和 DOM 操作都与事件的发生绑定在一起，这也是最初使用 jQuery 进行前端开发中最常用的设计模式。在这种模式下，为 DOM 结点添加需要监听的事件，当出现用户事件（比如点击某个按钮）时，调用对应的监听事件处理。在事件处理中，根据业务逻辑，使用选择器选择 HTML 中相应的 DOM 结点进行操作，比如点击“变为红色”按钮后，将某一段文字颜色设置为红色，就在此按钮的点击监听事件中，选取文字对应的 DOM 结点并设置为红色。      <p class="f4 lh-copy measure mt0-ns b">
      </p>
      <img class="w-50-ns" src="../../../assets/event.png" alt="Event Based Framework">
    </div>
  </article>
</template>

<script>
    export default {
        name: "events-based"
    }
</script>

<style scoped>

</style>
