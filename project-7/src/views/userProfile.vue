<template>
    <div id="submit-form">
        <h2> profile</h2>
        <span>
            <p>First Name:</p>
            <p>{{userInfo.firstName}}</p>
        </span>
        <span>
            <p>Last Name:</p>
            <p>{{userInfo.lastName}}</p>
        </span>
        <span>
            <p>Email:</p>
            <p>{{userInfo.email}}</p>
        </span>
        <button @click="deleteProfile">Delete</button>
    </div>
</template>
  
<script>
import router from '@/router'
export default {
    name: 'userProfile',
    data() {
        return {
            userInfo: {}
        }
    },
    methods: {
        /**
         * gets user info from the database 
         */
        getUserInfo() {
            if (localStorage.getItem('token') !== null) {

                const Id = parseInt(localStorage.getItem('id'));
                let token = localStorage.getItem('token');
                token = token.replaceAll('"', '');
                fetch('http://localhost:3000/api/auth/profile', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + ' ' + token
                    },
                    body: JSON.stringify({
                        userId: Id,
                    })
                })
                    .then(response => response.json())
                    .then(data => this.userInfo = data)
            }
        },
        /**
         * deletes user profile from database
         */
        deleteProfile() {
            const Id = parseInt(localStorage.getItem('id'));
            let token = localStorage.getItem('token');
            token = token.replaceAll('"', '');

            fetch('http://localhost:3000/api/auth/profile', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + ' ' + token
                },
                body: JSON.stringify({
                    userId: Id,
                })
            })
                .then(response => response.json())
                .then(data => deleteProfileResponse(data))

            function deleteProfileResponse(data) {
                localStorage.clear()
                alert("Account Deleted")
                router.push('/')
                console.log(data)
            }
        }
    },
    created: function () {
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

    span {
        width: 80px;
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
  