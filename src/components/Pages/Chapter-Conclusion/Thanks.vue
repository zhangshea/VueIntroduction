<template>
  <div id='main'>
    <header class="tc ph4" >
      <h1 class="f3 f2-m f1-l fw2 black-90 mv3">
        谢谢大家！
      </h1>
      <h2 class="f4 f4-m f3-l fw2 black-90 mt0 lh-copy">
        This presentation introduced VueJS was built with VueJS.
      </h2>
      <h2 class="f4 f4-m f3-l fw2 black-90 mt0 lh-copy">
        Thanks Tachyons /tæ'kaɪnz/ A CSS Toolbox
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
