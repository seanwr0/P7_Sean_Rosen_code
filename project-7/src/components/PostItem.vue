<template>



    <div id="postCard">
        <div id="postCard__name">
            <h3>{{name}}</h3>
        </div>

        <p>{{title}}</p>

    </div>


</template>



<script>
export default {
    props: ['title', 'text', 'id', 'name']
}
</script>




<style  scoped lang="scss">
#postCard {
    display: flex;
    width: 320px;
    height: 80px;
    background-color: #24385a;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 3px 2px rgb(0, 15, 42);

    p {
        margin: 0px;
        margin-left: 7px;
        margin-top: 7px;
        overflow: hidden;
    }

    &__name {
        margin: 0px;
        height: 80px;
        width: 100px;
        background-color: #324b78;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        h3 {
            margin: 0px;
            overflow: hidden;
        }
    }
}
</style>