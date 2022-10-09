<template>

    <div id="forum">
        <button @click="postButtonHandling">{{postButton}}</button>


        <div v-if="PostShow" id="Posts">


            <PostItem v-for="post in posts"  :key="post.id"  :id="post.id" :name="post.name" :title="post.title"></PostItem>



        </div>

        <div v-if="makePostShow" id="writePost">
            <input v-model="postTitle" placeholder="Title">
            <textarea v-model="postText" placeholder="Text"></textarea>


            <button @click="submitPost">Submit</button>
        </div>
    </div>
</template>
  
  
  
<script>

import PostItem from '../components/PostItem.vue'

export default {
    name: 'userPosts',
    data() {
        return {
            postButton: "Make Post",
            postTitle: "",
            postText: "",
            makePostShow: false,
            PostShow: true,

            posts: [
                { title: 'My journey with Vue', text: 'test' },
                { title: 'Blogging with Vue', text: 'test' },
                { title: 'Why Vue is so fun', text: 'test' }
            ]



        }
    },

    components: {
        PostItem,

    },


    methods: {


        postButtonHandling(){

            this.makePostShow = !this.makePostShow;
            this.PostShow = !this.PostShow;

            if(this.postButton === "Make Post"){
                this.postButton = "Posts"
            }else{
                this.postButton = "Make Post"
            }
        },




        // gets an array of posts from the backend
        getPostInfo() {
            fetch('http://localhost:3000/api/post', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => this.posts = data)
        },

        // checks if title and main text has anything, then sends the post to the back end to be saved
        submitPost() {
            if (this.postTitle == "" || this.postText == "") {
                alert("must be a title and text")
            } else {
                if (localStorage.getItem('token') !== null) {

                    let Id = (localStorage.getItem('id'));
                    Id = parseInt(Id);
                    let Name = (localStorage.getItem('name'));

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
                            name: Name,
                            imageUrl: "test"


                        })
                    })
                        .then(response => response.json())
                        .then(data => responseHandler(data))
                }
            }
            function responseHandler(data) {
                if (data.error) {
                    alert(data.error);
                } else {
                   
                    alert("Post created!");
                   

                }

            }
        }


    },

    created() {
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
    min-height: 500px;
    background-color: #091f43;
    gap: 10px;
    margin-bottom: 50px;
    padding-bottom: 20px;
    button {
        width: 275px;

    }

}

#writePost {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(227, 223, 223);
    width: 340px;
    min-height: 400px;
    gap: 5px;

    textarea {
        width: 320px;
        height: 300px;
        resize: none;
        border: none;
        outline: none;
    }
}

#Posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(227, 223, 223);
    width: 340px;
    min-height: 500px;
    gap: 5px;
    padding-bottom: 30px;
    
}
</style>
  