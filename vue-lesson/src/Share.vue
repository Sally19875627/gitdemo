<template>
    <div>
        <button class="btn btn-primary" @click="share">分享到微信</button>
    </div>
</template>
<script>
export default {
    methods : {
        share(){
            this.$emit("shared",{
                name:"SallyLee"
            })
        }
    }
}
</script>

