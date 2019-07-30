<template>
        <h1>{{title}}</h1>
</template>
<script>
export default {
    name: 'Titlehandler',
    props:{
        title:{
            type:String,
            required:true
            }

        
    }
}
</script>
<style scoped>
h1{
color: #faa;
}
</style>
