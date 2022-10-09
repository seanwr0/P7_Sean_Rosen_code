<template>
    <main>
        <div id="forum">
            <div id="postContent">
                
                <h2>{{postTitle}}</h2>
                <p>{{postText}}</p>

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
        }
    },

    methods: {
        // gets post from the backend
        getPostInfo() {
            let self = this;
            fetch('http://localhost:3000/api/post/page', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: parseInt(this.$route.params.id),
                })
            })
                .then(response => response.json())
                .then(data => responseHandler(data))

            function responseHandler(data) {
                self.postTitle = data.title
                self.postText = data.text

            }
        },

    },

    created() {
        this.getPostInfo()
    }
}

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main{
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
    min-height: 500px;
    background-color: #091f43;
    gap: 10px;


}

#postContent {
    color: black;
    display: flex;
    flex-direction: column;
    background-color: #ced7e6; ;
    width: 70%;
    min-height: 500px;
    gap: 5px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    margin-top: 10px;

    h2 {
        color: white;
        font-size: 35px;
        margin: 0px;
        background-color: #275aab;
        width: 97%;
        height: 40px;
        padding-left: 3%;
        
    }
    p{
        margin: 15px;
    }
}
</style>
  