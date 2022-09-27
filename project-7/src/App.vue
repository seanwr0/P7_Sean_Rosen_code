<template>

  <div id="header">
    <img alt="logo" src="./assets/icon-text.png">


  </div>
<div id="body">
  <HelloWorld msg="" />


</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app{
  display: flex;
  margin: 0px;
  color: white;
  height: 1500px;
  flex-wrap: wrap;

  
 

}

#header {
  margin: 0px;
  height: 300px;
  width: 100%;
  background-color: #d1515a;
  min-width: 360px;
}

#body{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1400px;
  
}
</style>
