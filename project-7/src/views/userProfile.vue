<template>

    <div id="submit-form">
        <h2> profile</h2>

        <span>
            <p>First Name</p>
            <p>{{userInfo.firstName}}</p>
        </span>

        <span>
            <p>Last Name</p>
            <p>{{userInfo.lastName}}</p>
        </span>

        <span>
            <p>Email</p>
            <p>{{userInfo.email}}</p>
        </span>


        <button >Delete</button>



    </div>

</template>
  
  
  
<script>
export default {
    name: 'userProfile',

    data() {
        return {
            userInfo: {}
        }
    },

    methods: {
        getUserInfo() {
            const Id = localStorage.getItem('user');
            fetch('http://localhost:3000/api/auth/profile', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: Id,
                })
            })
                .then(response => response.json())
                .then(data => this.userInfo = data)
        }
    },

    created: function(){
        this.getUserInfo()
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
  