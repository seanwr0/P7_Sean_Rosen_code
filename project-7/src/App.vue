<template>

  <div id="header">
    <img alt="Groupomania Logo" src="./assets/icon-text.png">

    <h2>{{name}}</h2>

    <div id="profile">
      <router-link to="/">SignIn</router-link>
      <router-link to="/signUp">SignUp</router-link>

      <p @click="handleSignOut">SignOut</p>

      <router-link to="/profile"> Profile </router-link>
    </div>

  </div>

  <div id="body">
    <router-view />
  </div>

</template>
 
<script>
export default {
  name: 'App',

data(){
  return{

    name: ""
  }
},
  methods: {
    handleSignOut() {
      localStorage.clear();
      window.location.reload()
    },

    getName(){
       let Name = localStorage.getItem('name');
       if(Name === 'undefined') {
       this.name = ''
       }else{
       
        this.name = Name
       }
       
    }

  },

  created: function () {
        this.getName()
    }


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


  #header {
    display: flex;
    flex-direction: column;
    margin: 0px;
    height: 150px;
    width: 100%;
    background-color: #d1515a;
    min-width: 360px;

    h2 {
      position: relative;
      bottom: 30px;
      size: 12px;
      align-self: end;
      
      margin-right: 5px;
    }

    img {
      width: 200px;
      height: 50px;
    }
  }

  #profile {
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 55px;
    gap: 5px;
    position: relative;
    bottom: 40px;

    a {
      text-decoration: none;
      color: white;

    }

    p {
      margin: 0px;
      cursor: pointer;
    }
  }
}

#body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
}
</style>
 
 

