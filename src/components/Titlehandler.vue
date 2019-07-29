<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>
<script>
export default {
    name: 'Titlehandler',
    // data(){
    //     return {
    //     title:'Helloword'
    //     }
    // },
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
