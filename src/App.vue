<template>
<div>
  <HeaderFake/>
  <div id="app">
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ben">Ben</router-link>
    </div>
    <router-view/>
    
  </div>
  <FooterFake/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 500px;
  margin-top: 60px;

}
/* .router-link-active{
 background-color: #faa;
} */
.router-link-exact-active {
 background-color: #ccc;
}

</style>

<script>
// @ is an alias to /src
import HeaderFake from './components/HeaderFake/index.vue'
import FooterFake from './components/FooterFake/index.vue'
export default {
  name: 'app',
  components: {
    HeaderFake,
    FooterFake
  }
}
</script>
