<template>
    <div>
        <p>Written by {{articalName}}</p> 
    </div>
</template>
<script>
export default {
    props: {
        articalName:{
            type:[String, Number],
            default:"Sally Lee"
        }
    }
}
</script>

