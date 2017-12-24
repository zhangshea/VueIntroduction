<template>
  <div id='main'>
    <header class="tc ph4" >
      <h1 class="f3 f2-m f1-l fw2 black-90 mv3">
        A short survey on Vue.JS
      </h1>
      <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
        Xinyu Zhang
      </h2>
      <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
        17212010048
      </h2>
      <br><br/>
      <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
        Dec. 25, 2017
      </h2>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  min-height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>
