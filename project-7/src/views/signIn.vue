<template>

  <div id="submit-form">
    <h2> SignIn</h2>
    <form @submit.prevent="handleSubmit">
      <span>
        <p>Email</p>
        <input type="email" v-model="email" />
      </span>

      <span>
        <p>Password</p>
        <input type="password" v-model="passWord" />
      </span>

      <button>submit</button>

    </form>

  </div>

</template>



<script>
export default {
  name: 'signIn',

  data() {
    return {
      email: "",
      passWord: ""
    }
  },

  methods: {
    handleSubmit() {
      fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userEmail: this.email,
          password: this.passWord

        })
      })
        .then(response => response.json())
        .then(data => window.localStorage.setItem('user', JSON.stringify(data.userId)))
        .then( data => alert(data),)
    }
  }
}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#submit-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  min-width: 360px;
  height: 500px;
  background-color: #091f43;

  form {
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 200px;
    gap: 20px;

    span {
      display: flex;
      flex-direction: row;
      height: 30px;
      margin-right: 20px;
    }

    p {
      margin: 0px;
      width: 80px;
    }
  }

  button {
    width: 275px;
    margin-left: 70px;
  }

  input {
    width: 275px;
  }
}
</style>
