<template>
    <div id="WholeApp">
        <div class="HeaderBlue">
            <h3 class="Name title">apis.is/Concerts</h3>
            <button class="button ReloadButton">press me to refresh</button>
        </div>
        <div class="row">
            <div class="column" v-for="(Concert, index) in AllConcerts" :key="index">
                <div class="ConcertInfo">
                    <img :src="Concert.imageSource" alt="">
                    <div class="displayInline">
                        <p>
                            {{ Concert.eventDateName }} <br>
                            {{ Concert.dateOfShow }}    <br>
                            {{ Concert.eventHallName }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        name: "ConcertDisplay",
        props:{
            AllConcerts: String,
            index: null,
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
        methods:{
            SortByName(){
                
            }
        },
    }
</script>

<style>
#WholeApp{
    margin-top: 60px;
    padding: 0;
}
.ConcertInfo{
    display: flex;
}
.displayInline{
    display: inline;
}
.column {
    float: left;
    width: 50%;
    padding: 10px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}
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

