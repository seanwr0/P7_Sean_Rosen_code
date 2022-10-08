<template>

    <div id="forum">

        <div id="Post">

        </div>

        <div  id="postContent">
       
        </div>
    </div>
</template>
  
  
  
<script>



export default {
    name: 'postPage',
    data() {
        return {
        
            postTitle: "",
            postText: "",
           

            posts: [
                { title: 'My journey with Vue', text: 'test' },
                { title: 'Blogging with Vue', text: 'test' },
                { title: 'Why Vue is so fun', text: 'test' }
            ]



        }
    },

    methods: {

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


#Post {
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
  