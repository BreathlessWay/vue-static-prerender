<template>
  <div>
    <router-link to="/about">about</router-link>
    <router-link to="/join">join</router-link>
    <router-link to="/intro">intro</router-link>
    <div class="one">
      <div class="two">1</div>
      <div class="three">2</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    metaInfo: {
      title: 'index',
      meta: [
        {name: 'description', content: 'index page'}
      ]
    }
  }
</script>

<style lang="scss">
  .one {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .two {
      flex: 1;
      background: red;
      height: 50px;
    }
    .three {
      flex: 1;
      background: gray;
      height: 80px;
    }
  }
</style>
