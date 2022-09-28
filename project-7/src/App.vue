<template>

  <div id="header">
    <img alt="logo" src="./assets/icon-text.png">

    <ul id="profile">
      <router-link to="/">SignIn</router-link>
      <router-link to="/signUp">SignUp</router-link>
      <router-link to="/profile">Profile</router-link>
    </ul>

  </div>

  <div id="body">
    <router-view />
  </div>

</template>
 
<script>
export default {
  name: 'App',

}
</script>
 
<style lang="scss">
#app {
  display: flex;
  margin: 0px;
  color: white;
  height: 1000px;
  flex-wrap: wrap;
  gap: 10px;
}

#header {
  margin: 0px;
  height: 150px;
  width: 100%;
  background-color: #d1515a;
  min-width: 360px;
}
#profile{
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 5px;
  a{
  text-decoration: none;
  color: white;
  }
}

#body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
}
</style>
 
 

