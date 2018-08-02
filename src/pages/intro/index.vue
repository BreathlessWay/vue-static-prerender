<template>
  <div>
    <router-link to="/intro">guess</router-link>
    <router-link to="/intro/today">today</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped>

</style>
