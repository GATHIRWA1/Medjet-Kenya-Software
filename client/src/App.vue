<template>
  <div id="app">
    <loader></loader>
   <router-view :key="$route.fullPath"> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


