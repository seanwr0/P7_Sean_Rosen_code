<template>

  <div id="header">
    <img alt="logo" src="./assets/icon-text.png">

    <ul id="profile">
      <li @click="signupShow = !signupShow,signInShow = false">sign-up</li>
      <li @click="signInShow = !signInShow, signupShow = false">sign-in</li>
    </ul>

  </div>

  <div class="body" v-if="signupShow === true" >
    <SignUp/>
  </div>

  <div class="body" v-if="signInShow === true" >
    <SignIn/>
  </div>

</template>

<script>
import SignUp from './components/signUp.vue'
import SignIn from './components/signIn.vue'

export default {
  name: 'App',
  components: {
    SignUp,
    SignIn
},

  data() {
    return {
      signupShow: true,
      signInShow: true
  }
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
}

#header {
  margin: 0px;
  height: 150px;
  width: 100%;
  background-color: #d1515a;
  min-width: 360px;

  ul {
    list-style: none;

    li {
      border: 5px;
    }

  }
}

.body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
}
</style>
