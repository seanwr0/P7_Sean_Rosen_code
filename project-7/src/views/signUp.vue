<template>

  <div id="submit-form">
    <h2> Signup</h2>
    <form @submit.prevent="handleSubmit">
      <span>
        <p>First Name</p>
        <input type="firstName" v-model="firstName" />
      </span>

      <span>
        <p>Last Name</p>
        <input type="lastName" v-model="lastName" />
      </span>

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

import router from '@/router'

export default {
  name: 'signUp',

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      passWord: ""
    }
  },

  methods: {

    /** checks if all forms are filled out. then sends info to back end */
    handleSubmit() {
      if (this.firstName == "" || this.lastName == "" || this.passWord == "") {
        alert("must be a first and last name and password")
      } else {
        fetch('http://localhost:3000/api/auth/signup', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fName: this.firstName,
            lName: this.lastName,
            userEmail: this.email,
            password: this.passWord

          })
        })
          .then(response => response.json())
          .then(data => responseHandler(data))
      }

      function responseHandler(data) {
        if (data.error) {
          return alert(data.error);
        } else {
          alert("account created!")
          router.push('/')
        }

      }
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
