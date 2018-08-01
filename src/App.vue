<template>
  <article id="app">
    <router-view/>
  </article>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      title: '主页',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
