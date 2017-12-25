<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        双向数据绑定的问题
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 1.x 和 AngularJS
      </h2>
    </header>
    <div class="fn fl-ns w-50-ns">
      <p class="f4 lh-copy measure mt0-ns">
        1、 双向绑定导致数据流难以追踪。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        2、 数据修改的连锁反应，甚至是死循环。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        3、 状态抖动。
      </p>
      <div class="mw9 center ph3-ns">
        <div class="cf ph2-ns">
          <div class="fl w-100 w-30-ns pa2">
          </div>
          <div class="fl w-100 w-50-ns pa2">
            <img src="../../../assets/frp.png" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
    export default {
        name: "data-bind-problem"
    }
</script>

<style scoped>

</style>
