<template>
<div class="alert alert-info">
    <slot name="one">{{msg}}</slot>
    <slot name="two">{{msg}}</slot>
</div>
</template>

<script>
export default {
    data(){
        return{
            msg :"这是一个页面"
        }
        
    }
}
</script>
