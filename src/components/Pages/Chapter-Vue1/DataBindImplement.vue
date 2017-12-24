<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        数据绑定的实现
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 1.x 和 AngularJS
      </h2>
    </header>
    <div class="fn fl-ns w-50-ns">
      <p class="f4 lh-copy measure mt0-ns">
        Vue 1.x 中的数据绑定机制与 AngularJS 中的数据绑定机制是比较相似的，事实上，Vue 1.x 的设计参考了大量 AngularJS 中的设计，但是正如最开始所说，Vue 系列架构最核心的亮点在于设计上的向前兼容和渐进式架构。      <p class="f4 lh-copy measure mt0-ns">
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        在 AngularJS 中，数据绑定是用一种叫做“脏检查”的技术实现的，这种技术的原理是每个一个固定的时间片(比如16ms)，检查一下监听的变量和 DOM 结点中有没有需要被绑定修改的值，如果有就触发修改绑定。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        在 Vue 1.x 中，使用了 defineProperty 属性来完成这一个绑定过程。Vue 会将 HTML 模板中的绑定翻译到对应对象中 defineProperty 设定的属性的 getter 和 setter 函数中，当此属性被读取或者修改时，触发绑定修改。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        这是比 AngularJS 更优美的做法，但是这样做的缺点在于较早期的浏览器中没有对 defineProperty 的实现，所以 vue 1.x 的兼容性是差与 AngularJS 的，但是避免了 AngularJS 有的很多脏检查的问题。
      </p>
    </div>
  </article>
</template>

<script>
    export default {
        name: "data-bind-implement"
    }
</script>

<style scoped>

</style>
