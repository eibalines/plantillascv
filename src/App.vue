<template>
  <div id="app">
      <div class="row justify-content-center">
        <div class="col-8 text-center">
         <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
    
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: turquoise;
}
</style>