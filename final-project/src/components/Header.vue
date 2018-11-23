<template>
    <div id="container">
        <div class="HeaderBlue">
            <h3 class="Name title">Icelndic concerts</h3>
            <button @click="UpdateConcerts" class="button ReloadButton">press me to refresh</button>
        </div>
    </div>    
</template>
<script>
import axios from "axios"
export default {
    name: "ReloadHeader",
    props:{

    },
    methods:{
        UpdateConcerts(){
            let self = this;
            setTimeout(() => {
                axios.get('http://apis.is/concerts',{})
                .then((response) => {
                    self.AllConcerts = response.data;
                }).
                catch((error) => {
                    window.console.log(error);
                })
            },30);
        },
    } 
}
</script>

<style>
    .HeaderBlue{
        position: absolute;
        left: 0%;
        top: 0%;
        width: 100%;
        height: 60px;
        background: aquamarine;
        float: left;
    }
    .Name{
        position: absolute;
        left: 0%;
        display: inline;
        top: 11px;
    }
    .ReloadButton{
        position: absolute;
        right: 0%;
        height: 60px;
    }
</style>

