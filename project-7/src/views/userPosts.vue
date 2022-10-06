<template>

    <div id="forum">
        <button @click="makePost">Make Post</button>

        <div id="writePost">

            <input v-model="postTitle" placeholder="Title">
            <textarea v-model="postText" placeholder="Text"></textarea>

            <button @click="submitPost">Submit</button>
        </div>
    </div>

</template>
  
  
  
<script>
export default {
    name: 'userPosts',

    data() {
        return {
            userPosts: {},
            postTitle: "",
            postText: ""
        }
    },

    methods: {
        getPostInfo() {
            fetch('http://localhost:3000/api/post', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => this.userPosts = data)
        },


        submitPost() {
            if (this.postTitle == "" || this.postText == "") {
                alert("must be a title and text")
            } else {

                if (localStorage.getItem('token') !== null) {

                    let Id = (localStorage.getItem('id'));
                    Id = parseInt(Id);

                    let token = localStorage.getItem('token');
                    token = token.replaceAll('"', '');

                    fetch('http://localhost:3000/api/post', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer' + ' ' + token
                        },
                        body: JSON.stringify({
                            postTitle: this.postTitle,
                            postText: this.postText,
                            userId: Id,
                            imageUrl: "test"


                        })
                    })
                        .then(response => response.json())
                        .then(data => responseHandler(data))
                }
            }
            function responseHandler(data) {
                if (data.error) {
                    return alert(data.error);
                } else {
                    alert("Post created!")
                }

            }
        }


    },

    created: function () {
        this.getPostInfo()
    }
}

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#forum {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    min-width: 360px;
    height: 500px;
    background-color: #091f43;
    gap: 10px;

    button {
        width: 275px;

    }

}

#writePost {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(176, 172, 172);
    width: 340px;
    height: 400px;
    gap: 5px;

    textarea {


        width: 320px;
        height: 300px;
        resize: none;
        border: none;
        outline: none;
    }
}
</style>
  