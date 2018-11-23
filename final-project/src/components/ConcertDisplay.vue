<template>
    <div id="WholeApp">
        <ReloadHeader></ReloadHeader>
        <div class="FlexDisplay" v-for="Concert in AllConcerts" :key="Concert.dateOfShow">
            <h1 class="title is-4"> {{ Concert.name }} </h1>
            <p class="subtitle">{{ Concert.dateOfShow }}</p>
        </div>
    </div>
</template>
<script>
    import ReloadHeader from "./Header.vue"
    import axios from "axios"
    export default {
        name: "ConcertDisplay",
        props:{
            AllConcerts: String,
        },
        components:{
            ReloadHeader
        },
        mounted(){
            var self = this
            axios.get('http://apis.is/concerts', {
            /*params: {
                api_token: 'tXf0juUmbRcD7FMZKJzhN7mcYRV2SutX1nvgfZxLRc6Z19eIdqlfgKl4uQrI'
            }*/
            })
            .then((response) => {
                self.AllConcerts = response.data.results;
            }).
            catch((error) => {
                window.console.log(error);
            });
        },
    }
</script>

<style>
#WholeApp{
    margin-top: 60px;
}
</style>

