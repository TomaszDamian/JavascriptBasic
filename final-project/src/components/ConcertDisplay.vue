<template>
    <div id="WholeApp">
        <ReloadHeader></ReloadHeader>
        <gallery :images="AllConcerts" :index="index" @close="index=null"></gallery>
        <div
        class="image"
        v-for="(image,imageIndex) in AllConcerts"
        :key="imageIndex"
        :style="{ backgroundImage: 'url(' + image.imageSource + ')', width: '280px', height: '200px' }"
        >
        <p class="OnImageText">{{ image.eventDateName }}</p>
        </div>
    </div>
</template>
<script>
    import ReloadHeader from "./Header.vue"
    import axios from "axios"
    import VueGallery from "vue-gallery";
    export default {
        name: "ConcertDisplay",
        props:{
            AllConcerts: String,
            ConcertImages: [],
            index: null,
        },
        components:{
            ReloadHeader,
            'gallery':VueGallery,
        },
        mounted(){
            var self = this;
            axios.get('http://apis.is/concerts', {})
            .then((response) => {
                self.AllConcerts = response.data.results;
            })
            .catch((error) => {
                window.console.log(error);
            });
        },
    }
</script>

<style>
#WholeApp{
    margin-top: 60px;
    padding: 0;
}
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-text-stroke: 0.4px white;
    font-size: 25px;
    border: 1px solid #ebebeb;
    margin: 5px;
}
.OnImageText{
    margin-top: 130px;
}
</style>

