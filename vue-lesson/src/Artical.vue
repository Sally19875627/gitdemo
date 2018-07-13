<template>
    <div class="container">
        <h1>{{title}}</h1>
        <p>分享次数： {{shareTime}}</p>
        <p>发表于{{date | moment}}</p>
        <p class="lead">
            {{content}}
        </p>
        <app-author :artical-name=123>
            <div>我是李成玉</div>
        </app-author>
        <app-share @shared = "fooShare"></app-share>
    </div>
    
</template>

<script>
import moment from "moment";
import Author from "./Author.vue"
import Share from "./Share.vue"
export default {
    data(){
        return{
            title:"震惊！！！！",
            date: new Date(),
            content : "为何过年亲戚催找对象",
            name:"SallyLee",
            shareTime : 0
        }
    },
    filters:{
        moment:function(value){
            return moment(value).format("MMMM Do")
        }
    },
    components:{
        "app-author":Author,
        "app-share":Share
    },
    methods:{
        fooShare(event){
            console.log(event);
            this.shareTime++;
        }
    }
}
</script>

<style scoped>
    *{
        color:red;
    }
</style>
