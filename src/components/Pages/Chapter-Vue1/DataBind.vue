<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        双向数据绑定与双向数据流动
      </h1>
      <h2 class="f3 mid-gray lh-title">
        A short survey on Vue.JS - Vue 1.x 和 AngularJS
      </h2>
    </header>
    <div class="fn fl-ns w-50-ns">
      <p class="f4 lh-copy measure mt0-ns">
        数据绑定是在应用程序 UI 与业务逻辑之间建立连接的过程。如果绑定具有正确设置并且数据提供正确通知，则当数据更改其值时，绑定到数据的元素会自动反映更改。      </p>
      <p class="f4 lh-copy measure mt0-ns">
        当双向绑定时，对任何一方的修改会导致另一方的修改。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        在更高层面上来说，这种数据绑定机制，为 Controller （也就是业务逻辑代码）和 View （也就是可见的视图）之间提供了一个 State 层，Controller 避免对 View 的直接操作，而是对 State 进行操作，之后通过 State 与 View 之间的数据绑定机制，实现对 View 的间接操作和更新。增加这个抽象的 State 层，降低了开发者书写单一业务逻辑块的难度，让数据流变的更加清晰。开发者将原本 Controller 与 View 之间的直接操作，拆分为 Controller 与 State 之间的操作，以及 State 与 View 之间的操作。
      </p>
      <p class="f4 lh-copy measure mt0-ns">
        数据在 State 和 View 之间双向流动。
      </p>
    </div>
  </article>
</template>

<script>
    export default {
        name: "data-bind"
    }
</script>

<style scoped>

</style>
