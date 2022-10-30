<template>
    <main>
        <div id="forum">
            <div id="postContent">
                <h2>{{postTitle}}</h2>
                <p>{{postText}} <img :src="imageUrl" alt=""> </p>
                <div id="postLink">
                    <router-link to="/userPosts">Back to Posts</router-link>
                </div>
            </div>

        </div>
    </main>
</template>
  
<script>
export default {
    name: 'userPostPage',
    data() {
        return {
            postTitle: "",
            postText: "",
            imageUrl: "",
            userIds: []
        }
    },

    methods: {
        // gets post from the backend
        getPostInfo() {
            let self = this;
            if (localStorage.getItem('token') !== null) {
                let token = localStorage.getItem('token');
                token = token.replaceAll('"', '');


                fetch('http://localhost:3000/api/post/page', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + ' ' + token
                    },
                    body: JSON.stringify({
                        id: parseInt(this.$route.params.id),
                    })

                })
                    .then(response => response.json())
                    .then(data => responseHandler(data))
            }

            function responseHandler(data) {

                self.postTitle = data.title
                self.postText = data.text
                self.imageUrl = data.imageUrl
                self.userIds = data.userIds
            }
        },

        /** sends user id to backend to be added to id array for post*/
        updatePostIds() {
            fetch('http://localhost:3000/api/post/page', {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: parseInt(localStorage.getItem('id')),
                    postId: parseInt(this.$route.params.id),
                })
            })
                .then(response => response.json())
                .then(data => responseHandler(data))

            function responseHandler(data) {
                console.log(data)
            }
        },
    },

    created() {
        this.getPostInfo()
    },
    mounted() {
        this.updatePostIds()
    }
}

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 600px;
}

#forum {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    min-width: 360px;
    min-height: 450px;
    background-color: #091f43;
    gap: 10px;
}

#postContent {
    color: black;
    display: flex;
    flex-direction: column;
    background-color: #ced7e6;
    width: 70%;
    min-height: 400px;
    gap: 5px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    margin-top: 10px;

    h2 {
        color: white;
        font-size: 30px;
        margin: 0px;
        background-color: #275aab;
        width: 97%;
        min-height: 40px;
        padding-left: 3%;
    }

    p {
        display: flex;
        flex-direction: column;
        margin: 15px;
        flex-wrap: wrap;
    }
}

img {
    justify-self: flex-end;
    min-width: 225px;
    height: 200px;
    object-fit: contain;
    margin-top: 40px;
}
#postLink{
    display: flex;
    justify-content: center;
    align-self: center;
    justify-self: end;
    border-radius: 9px;
    background-color: #275aab;
    width: 190px;
    height: 40px;
    a{
     
        font-size: 30px;
        text-decoration: none;
        color: white;
    }
}
</style>
  